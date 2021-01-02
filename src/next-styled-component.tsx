import cn from "classnames";
import React, { Component, createElement, ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from "react";
import { CssProps, LayoutProps, nextStyledSystem, PseudoSelectorProps } from "./next-styled-system";
import { preflightCss } from "./preflight.css";
import { Registry } from "./stylesheet-registry";

const styleSheetRegistry = new Registry();

export const Element = (HTMLTag = "div", ref?) => {
  if (ref) {
    return forwardRef((props: CssProps & HTMLAttributes<any> & { HTMLTag?: string }, ref) => {
      return createElement(
        class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
          public prevProps: string[];
          
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
            
            const { forwardedRef, ...filteredProps } = test.filteredProps;
            
            return createElement(
              HTMLTag || "div",
              { className: cn(test.styleArray.map(([className]) => `${className}`)), ref: forwardedRef, ...filteredProps },
              this.props.children
            );
          }
        },
        { forwardedRef: ref, ...props },
        props.children
      );
    });
  } else {
    return class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
      public prevProps: string[];
      
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
        
        const { forwardedRef, ...filteredProps } = test.filteredProps;
        
        return createElement(
          HTMLTag || "div",
          { className: cn(test.styleArray.map(([className]) => `${className}`)), ref: forwardedRef, ...filteredProps },
          this.props.children
        );
      }
    };
  }
};

export const VariantElement = (HTMLTag = "div", ref?) => {
  if (ref) {
    return forwardRef((props: CssProps & HTMLAttributes<any> & { HTMLTag?: string }, ref) => {
      return createElement(
        class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
          public prevProps: string;
          
          constructor(props) {
            super(props);
            this.prevProps = undefined;
          }
          
          componentWillUnmount() {
            styleSheetRegistry.remove({ id: this.prevProps });
          }
          
          render() {
            const { id, styles, ...test } = nextStyledSystem(this.props);
            
            if (this.prevProps !== id) {
              
              if (this.prevProps && this.prevProps !== id) {
                styleSheetRegistry.remove({ id: this.prevProps });
              }
              
              if (this.prevProps !== id) {
                styleSheetRegistry.add({ id, children: styles });
              }
              
              this.prevProps = id;
            }
            
            const { forwardedRef, ...filteredProps } = test.filteredProps;
  
            return createElement(
              HTMLTag || "div",
              { className: `jsx-${id}`, ref: forwardedRef, ...filteredProps },
              this.props.children
            );
          }
        },
        { forwardedRef: ref, ...props },
        props.children
      );
    });
  } else {
    return class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
      public prevProps: string;
  
      constructor(props) {
        super(props);
        this.prevProps = undefined;
      }
  
      componentWillUnmount() {
        styleSheetRegistry.remove({ id: this.prevProps });
      }
  
      render() {
        const { id, styles, ...test } = nextStyledSystem(this.props);
    
        if (this.prevProps !== id) {
      
          if (this.prevProps && this.prevProps !== id) {
            styleSheetRegistry.remove({ id: this.prevProps });
          }
  
          if (this.prevProps !== id) {
            styleSheetRegistry.add({ id, children: styles });
          }
      
          this.prevProps = id;
        }
    
        const { forwardedRef, ...filteredProps } = test.filteredProps;
        return createElement(
          HTMLTag || "div",
          { className: `jsx-${id}`, ref: forwardedRef, ...filteredProps },
          this.props.children
        );
      }
    }
  }
};

export const NamedElement = (HTMLTag = "div", className, ref?) => {
  if (ref) {
    return forwardRef((props: CssProps & HTMLAttributes<any> & { HTMLTag?: string }, ref) => {
      return createElement(
        class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
          public prevProps: [number, string?, string?];
    
          constructor(props) {
            super(props);
            this.prevProps = [0, '', ''];
          }
    
          componentWillUnmount() {
            styleSheetRegistry.remove({ id: this.prevProps[2] });
          }
    
          render() {
            const { id, styles, ...test } = nextStyledSystem(this.props);
      
            const regex = new RegExp(`.jsx-${id}`,`gi`)
            if (this.prevProps[1] !== id) {
              if (this.prevProps[0]=== 0) {
                styleSheetRegistry.add({ id: className, children: styles.replace(regex,`.${className}`) });
                this.prevProps[2] = className;
                this.prevProps[1] = id;
                this.prevProps[0] += 1;
              } else {
                if (this.prevProps[0] !== 1) {
                  styleSheetRegistry.remove({ id: `${className}-${this.prevProps[0] - 1}`, children: styles.replace(regex,`.${className}-${this.prevProps[0] - 1}`) });
                }
                styleSheetRegistry.add({ id: `${className}-${this.prevProps[0]}`, children: styles.replace(regex,`.${className}-${this.prevProps[0]}`) });
                this.prevProps[2] = `${className}-${this.prevProps[0]}`;
                this.prevProps[1] = id;
                this.prevProps[0] += 1;
              }
            }
      
            const { forwardedRef, ...filteredProps } = test.filteredProps;
            return createElement(
              HTMLTag || "div",
              { className: this.prevProps[0] === 1 ? className : `${className}-${this.prevProps[0]-1}`, ref: forwardedRef, ...filteredProps },
              this.props.children
            );
          }
        },
        { forwardedRef: ref, ...props },
        props.children
      );
    });
  } else {
    return class HTMLElement extends Component<LayoutProps & PseudoSelectorProps & HTMLAttributes<any> & { HTMLTag?: string, forwardedRef?: ForwardedRef<unknown> }> {
      public prevProps: [number, string?, string?];
  
      constructor(props) {
        super(props);
        this.prevProps = [0, '', ''];
      }
  
      componentWillUnmount() {
        styleSheetRegistry.remove({ id: this.prevProps[2] });
      }
  
      render() {
        const { id, styles, ...test } = nextStyledSystem(this.props);
        
        const regex = new RegExp(`.jsx-${id}`,`gi`)
        if (this.prevProps[1] !== id) {
          if (this.prevProps[0]=== 0) {
            styleSheetRegistry.add({ id: className, children: styles.replace(regex,`.${className}`) });
            this.prevProps[2] = className;
            this.prevProps[1] = id;
            this.prevProps[0] += 1;
          } else {
            if (this.prevProps[0] !== 1) {
              styleSheetRegistry.remove({ id: `${className}-${this.prevProps[0] - 1}`, children: styles.replace(regex,`.${className}-${this.prevProps[0] - 1}`) });
            }
            styleSheetRegistry.add({ id: `${className}-${this.prevProps[0]}`, children: styles.replace(regex,`.${className}-${this.prevProps[0]}`) });
            this.prevProps[2] = `${className}-${this.prevProps[0]}`;
            this.prevProps[1] = id;
            this.prevProps[0] += 1;
          }
        }
  
        const { forwardedRef, ...filteredProps } = test.filteredProps;
        return createElement(
          HTMLTag || "div",
          { className: this.prevProps[0] === 1 ? className : `${className}-${this.prevProps[0]-1}`, ref: forwardedRef, ...filteredProps },
          this.props.children
        );
      }
    }
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