import cn from "classnames";
import { AllHTMLAttributes, Component, createElement, ForwardedRef, forwardRef, ReactElement } from "react";
import { CssProps, LayoutProps, nextStyledSystem, PseudoSelectorProps } from "./next-styled-system";
import { preflightCss } from "./preflight.css";
import { Registry } from "./stylesheet-registry";

const styleSheetRegistry = new Registry();

export const Element = (HTMLTag = "div", defaultProps: LayoutProps & PseudoSelectorProps = {}, ref?) => {
  if (ref) {
    return forwardRef(
      (
        props: CssProps &
          AllHTMLAttributes<never> & {
            as?: string;
            useJsx?: boolean;
            useClass?: string;
            forwardedRef?: ForwardedRef<unknown>;
          },
        ref
      ) => {
        return createElement(
          elementFactory(styleSheetRegistry, defaultProps, HTMLTag),
          { forwardedRef: ref, ...props },
          props.children
        );
      }
    );
  } else {
    return elementFactory(styleSheetRegistry, defaultProps, HTMLTag);
  }
};

export function flushToReact(options: { nonce?: string } = {}): Array<ReactElement> {
  const css = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return [
    createElement("style", {
      id: `__jsx-preflight`,
      // Avoid warnings upon render with a key
      key: `__jsx-preflight`,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: { __html: preflightCss },
    }),
    createElement("style", {
      id: `__jsx-global`,
      // Avoid warnings upon render with a key
      key: `__jsx-global`,
      nonce: options.nonce ? options.nonce : undefined,
      [`data-ids`]: css.reduce((acc, [id], i) => {
        acc += `${i ? `,` : ""}${id}`;
        return acc;
      }, ""),
      dangerouslySetInnerHTML: {
        __html: css.reduce((acc, [_, css]) => {
          acc += css.replace(/\/\*.*?\*\//gi, "");
          return acc;
        }, ""),
      },
    }),
  ];
}

function elementFactory(styleSheetRegistry, defaultProps, HTMLTag) {
  return class HTMLElement extends Component<
    LayoutProps &
      PseudoSelectorProps &
      AllHTMLAttributes<never> & {
        as?: string;
        useJsx?: boolean;
        useClass?: string;
        forwardedRef?: ForwardedRef<unknown>;
      }
  > {
    public prevProps: string[] | string | [number, string?, string?];

    constructor(props) {
      super(props);
      this.prevProps = [];
    }

    componentWillUnmount() {
      if (this.props.useJsx) {
        styleSheetRegistry.remove({ id: this.prevProps });
      }

      if (this.props.useClass) {
        styleSheetRegistry.remove({ id: this.prevProps[2] });
      }

      if (!this.props.useJsx && !this.props.useClass && Array.isArray(this.prevProps)) {
        this.prevProps.forEach(id => {
          styleSheetRegistry.remove({ id });
        });
      }
    }

    render() {
      const { styleArray, id, styles, filteredProps } = nextStyledSystem({ ...defaultProps, ...this.props });
      const currentIds = [...styleArray.map(([id]) => id)];

      /*= =============== useJsx ================ */
      if (this.props.useJsx) {
        if (this.prevProps !== id) {
          if (!Array.isArray(this.prevProps) && this.prevProps && this.prevProps !== id) {
            styleSheetRegistry.remove({ id: this.prevProps });
          }

          if (this.prevProps !== id) {
            styleSheetRegistry.add({ id, children: styles });
          }

          this.prevProps = id;
        }

        const { /*useJsx, useClass,*/ forwardedRef, ...otherProps } = filteredProps;

        return createElement(
          this.props.as || HTMLTag || "div",
          { ...otherProps, className: cn(this.props.className, `jsx-${id}`) || undefined, ref: forwardedRef },
          this.props.children
        );
      }

      /*= =============== useClass ================ */
      if (this.props.useClass) {
        if (this.prevProps.length === 0) {
          this.prevProps = [0, "", ""];
        }
        const regex = new RegExp(`.jsx-${id}`, `gi`);
        if (this.prevProps[1] !== id) {
          if (this.prevProps[0] === 0) {
            styleSheetRegistry.add({
              id: this.props.useClass,
              children: styles.replace(regex, `.${this.props.useClass}`),
            });
            this.prevProps = [+this.prevProps[0] + 1, id, this.props.useClass];
          } else {
            if (this.prevProps[0] !== 1) {
              styleSheetRegistry.remove({
                id: `${this.props.useClass}-${+this.prevProps[0] - 1}`,
                children: styles.replace(regex, `.${this.props.useClass}-${+this.prevProps[0] - 1}`),
              });
            }
            styleSheetRegistry.add({
              id: `${this.props.useClass}-${this.prevProps[0]}`,
              children: styles.replace(regex, `.${this.props.useClass}-${this.prevProps[0]}`),
            });
            this.prevProps = [+this.prevProps[0] + 1, id, `${this.props.useClass}-${this.prevProps[0]}`];
          }
        }

        const { /*useJsx, useClass,*/ forwardedRef, ...otherProps } = filteredProps;
        return createElement(
          this.props.as || HTMLTag || "div",
          {
            ...otherProps,
            className:
              cn(
                this.props.className,
                this.prevProps[0] === 1 ? this.props.useClass : `${this.props.useClass}-${+this.prevProps[0] - 1}`
              ) || undefined,
            ref: forwardedRef,
          },
          this.props.children
        );
      }

      /*= =============== default: tailwind style ================ */
      if (!this.props.useJsx && !this.props.useClass && Array.isArray(this.prevProps)) {
        if (this.prevProps.length === 0 || JSON.stringify(this.prevProps) !== JSON.stringify(currentIds)) {
          if (!Array.isArray(this.prevProps)) {
            this.prevProps = [];
          }
          this.prevProps.forEach(id => {
            if (!currentIds.includes(id)) {
              styleSheetRegistry.remove({ id });
            }
          });

          styleArray.forEach(([className, style]) => {
            if (!this.prevProps.includes(className)) {
              styleSheetRegistry.add({ id: className, children: style });
            }
          });
          this.prevProps = currentIds;
        }

        const { forwardedRef, ...otherProps } = filteredProps;

        return createElement(
          this.props.as || HTMLTag || "div",
          {
            ...otherProps,
            className: cn(this.props.className, ...styleArray.map(([className]) => `${className}`)) || undefined,
            ref: forwardedRef,
          },
          this.props.children
        );
      }
    }
  };
}
