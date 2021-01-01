import cn from "classnames";
import React, { Component, createElement, ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from "react";
import { CssProps, LayoutProps, nextStyledSystem, PseudoSelectorProps } from "./next-styled-system";
import { preflightCss } from "./preflight.css";
import Registry from "./stylesheet-registry";

const styleSheetRegistry = new Registry();

export class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
  private prevProps: string[];
  
  constructor(props) {
    super(props);
    this.prevProps = [];
  }
  
  componentWillUnmount() {
    this.prevProps.forEach(id => {
      styleSheetRegistry.remove({ id });
    });
  }
  
  render() {
    const test = nextStyledSystem(this.props);
    const currentIds = [...test.styleArray.map(([id]) => id)];
    if (this.prevProps.length === 0 || JSON.stringify(this.prevProps) !== JSON.stringify(currentIds)) {
      
      this.prevProps.forEach(id => {
        if (!currentIds.includes(id)) {
          styleSheetRegistry.remove({ id });
        }
      });
      
      test.styleArray.forEach(([className, style]) => {
        if (!this.prevProps.includes(className)) {
          styleSheetRegistry.add({ id: className, children: style });
        }
      });
      this.prevProps = currentIds;
    }
    
    const {HTMLTag, forwardedRef, ...filteredProps} = test.filteredProps
    
    return createElement(
      HTMLTag || "div",
      { className: cn(test.styleArray.map(([className]) => `${className}`)), ref: forwardedRef, ...filteredProps },
      this.props.children
    );
  }
}

export const Element = (HTMLTag = "div", ref?) => {
  if (ref) {
    return forwardRef((props: CssProps & HTMLAttributes<any> & { HTMLTag?: string }, ref) => {
      return createElement(
        HTMLElement,
        {forwardedRef: ref, ...props},
        props.children
      );
    });
  } else {
    return HTMLElement;
  }
};

export function flushToReact(options: { nonce?: string; } = {}): Array<ReactElement> {
  const css = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return [
    createElement("style", {
      id: `__jsx-preflight`,
      // Avoid warnings upon render with a key
      key: `__jsx-preflight`,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: { __html: preflightCss }
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
        }, "")
      }
    })
  ];
}