import { Property as CSS } from "csstype";
import React from "react";
import hashString from "string-hash";

export type LayoutProps = {
  margin?: (CSS.Margin | number) | (CSS.Margin | number)[]
  m?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginTop?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mt?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginRight?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mr?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginBottom?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mb?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginLeft?: (CSS.Margin | number) | (CSS.Margin | number)[]
  ml?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginX?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mx?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginY?: (CSS.Margin | number) | (CSS.Margin | number)[]
  my?: (CSS.Margin | number) | (CSS.Margin | number)[]
  padding?: (CSS.Padding | number) | (CSS.Padding | number)[]
  p?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingTop?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pt?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingRight?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pr?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingBottom?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pb?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingLeft?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pl?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingX?: (CSS.Padding | number) | (CSS.Padding | number)[]
  px?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingY?: (CSS.Padding | number) | (CSS.Padding | number)[]
  py?: (CSS.Padding | number) | (CSS.Padding | number)[]
  border?: (CSS.Border | number) | (CSS.Border | number)[]
  borderWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderColor?: CSS.BorderColor | CSS.BorderColor[]
  borderStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderTop?: (CSS.Border | number) | (CSS.Border | number)[]
  borderTopWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderTopColor?: CSS.BorderColor | CSS.BorderColor[]
  borderTopStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderTopLeftRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderTopRightRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderBottom?: (CSS.Border | number) | (CSS.Border | number)[]
  borderBottomWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderBottomColor?: CSS.BorderColor | CSS.BorderColor[]
  borderBottomStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderBottomLeftRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderBottomRightRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderLeft?: (CSS.Border | number) | (CSS.Border | number)[]
  borderLeftWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderLeftColor?: CSS.BorderColor | CSS.BorderColor[]
  borderLeftStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderRight?: (CSS.Border | number) | (CSS.Border | number)[]
  borderRightWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderRightColor?: CSS.BorderColor | CSS.BorderColor[]
  borderRightStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderX?: (CSS.Border | number) | (CSS.Border | number)[]
  borderXWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderXColor?: CSS.BorderColor | CSS.BorderColor[]
  borderXStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderY?: (CSS.Border | number) | (CSS.Border | number)[]
  borderYWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderYColor?: CSS.BorderColor | CSS.BorderColor[]
  borderYStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  width?: (CSS.Width | number) | (CSS.Width | number)[]
  w?: (CSS.Width | number) | (CSS.Width | number)[]
  height?: (CSS.Height | number) | (CSS.Height | number)[]
  h?: (CSS.Height | number) | (CSS.Height | number)[]
  size?: (CSS.Width | number) | (CSS.Width | number)[]
  minWidth?: (CSS.MinWidth | number) | (CSS.MinWidth | number)[]
  minW?: (CSS.MinWidth | number) | (CSS.MinWidth | number)[]
  maxWidth?: (CSS.MaxWidth | number) | (CSS.MaxWidth | number)[]
  maxW?: (CSS.MaxWidth | number) | (CSS.MaxWidth | number)[]
  minHeight?: (CSS.MinHeight | number) | (CSS.MinHeight | number)[]
  minH?: (CSS.MinHeight | number) | (CSS.MinHeight | number)[]
  maxHeight?: (CSS.MaxHeight | number) | (CSS.MaxHeight | number)[]
  maxH?: (CSS.MaxHeight | number) | (CSS.MaxHeight | number)[]
  display?: CSS.Display | CSS.Display[]
  d?: CSS.Display | CSS.Display[]
  verticalAlign?: CSS.VerticalAlign | CSS.VerticalAlign[]
  justifyContent?: CSS.JustifyContent | CSS.JustifyContent[]
  justify?: CSS.JustifyContent | CSS.JustifyContent[]
  alignItems?: CSS.AlignItems | CSS.AlignItems[]
  align?: CSS.AlignItems | CSS.AlignItems[]
  alignContent?: CSS.AlignContent | CSS.AlignContent[]
  flexDirection?: CSS.FlexDirection | CSS.FlexDirection[]
  direction?: CSS.FlexDirection | CSS.FlexDirection[]
  flex?: (CSS.Flex | number) | (CSS.Flex | number)[]
  flexWrap?: CSS.FlexWrap | CSS.FlexWrap[]
  wrap?: CSS.FlexWrap | CSS.FlexWrap[]
  flexBasis?: CSS.FlexBasis | CSS.FlexBasis[]
  flexGrow?: CSS.FlexGrow | CSS.FlexGrow[]
  flexShrink?: CSS.FlexShrink | CSS.FlexShrink[]
  alignSelf?: CSS.AlignSelf | CSS.AlignSelf[]
  justifySelf?: CSS.JustifySelf | CSS.JustifySelf[]
  order?: (CSS.Order | number) | (CSS.Order | number)[]
  gridGap?: (CSS.GridGap | number) | (CSS.GridGap | number)[]
  gap?: (CSS.GridGap | number) | (CSS.GridGap | number)[]
  gridRowGap?: CSS.GridRowGap | CSS.GridRowGap[]
  gridColumnGap?: CSS.GridColumnGap | CSS.GridColumnGap[]
  gridColumn?: CSS.GridColumn | CSS.GridColumn[]
  gridRow?: CSS.GridRow | CSS.GridRow[]
  gridArea?: CSS.GridArea | CSS.GridArea[]
  gridAutoFlow?: CSS.GridAutoFlow | CSS.GridAutoFlow[]
  gridAutoRows?: CSS.GridAutoRows | CSS.GridAutoRows[]
  gridAutoColumns?: CSS.GridAutoColumns | CSS.GridAutoColumns[]
  gridTemplateRows?: CSS.GridTemplateRows | CSS.GridTemplateRows[]
  gridTemplateColumns?: CSS.GridTemplateColumns | CSS.GridTemplateColumns[]
  gridTemplateAreas?: CSS.GridTemplateAreas | CSS.GridTemplateAreas[]
  position?: CSS.Position | CSS.Position[]
  top?: (CSS.Top | number) | (CSS.Top | number)[]
  right?: (CSS.Right | number) | (CSS.Right | number)[]
  bottom?: (CSS.Bottom | number) | (CSS.Bottom | number)[]
  left?: (CSS.Left | number) | (CSS.Left | number)[]
  zIndex?: (CSS.ZIndex | number) | (CSS.ZIndex | number)[]
  overflow?: CSS.Overflow | CSS.Overflow[]
  overflowX?: CSS.OverflowX | CSS.OverflowX[]
  overflowY?: CSS.OverflowY | CSS.OverflowY[]
  color?: CSS.Color | CSS.Color[]
  background?: CSS.Background | CSS.Background[]
  bg?: CSS.Background | CSS.Background[]
  opacity?: (CSS.Opacity | number) | (CSS.Opacity | number)[]
  backgroundAttachment?: CSS.BackgroundAttachment | CSS.BackgroundAttachment[]
  backgroundClip?: CSS.BackgroundClip | CSS.BackgroundClip[]
  backgroundColor?: CSS.BackgroundClip | CSS.BackgroundClip[]
  backgroundImage?: CSS.BackgroundImage | CSS.BackgroundImage[]
  backgroundOrigin?: (CSS.BackgroundOrigin | number) | (CSS.BackgroundOrigin | number)[]
  backgroundPositionX?: (CSS.BackgroundPositionX | number) | (CSS.BackgroundPositionX | number)[]
  backgroundPositionY?: (CSS.BackgroundPositionY | number) | (CSS.BackgroundPositionY | number)[]
  backgroundSize?: (CSS.BackgroundSize | number) | (CSS.BackgroundSize | number)[]
  backdropFilter?: CSS.BackdropFilter | CSS.BackdropFilter[]
  boxShadow?: CSS.BoxShadow | CSS.BoxShadow[]
  outline?: CSS.Outline | CSS.Outline[]
  outlineColor?: CSS.OutlineColor | CSS.OutlineColor[]
  outlineOffset?: (CSS.OutlineOffset | number) | (CSS.OutlineOffset | number)[]
  outlineStyle?: CSS.OutlineStyle | CSS.OutlineStyle[]
  outlineWidth?: (CSS.OutlineWidth | number) | (CSS.OutlineWidth | number)[]
  visibility?: CSS.Visibility | CSS.Visibility[]
  fontFamily?: CSS.FontFamily | CSS.FontFamily[]
  fontSize?: (CSS.FontSize | number) | (CSS.FontSize | number)[]
  fz?: (CSS.FontSize | number) | (CSS.FontSize | number)[]
  fontWeight?: (CSS.FontWeight | number) | (CSS.FontWeight | number)[]
  fw?: (CSS.FontWeight | number) | (CSS.FontWeight | number)[]
  lineHeight?: (CSS.LineHeight | number) | (CSS.LineHeight | number)[]
  letterSpacing?: (CSS.LetterSpacing | number) | (CSS.LetterSpacing | number)[]
  textAlign?: CSS.TextAlign | CSS.TextAlign[]
  fontStyle?: CSS.FontStyle | CSS.FontStyle[]
  textDecoration?: CSS.TextDecoration | CSS.TextDecoration[]
  textTransform?: CSS.TextTransform | CSS.TextTransform[]
  textShadow?: CSS.TextShadow | CSS.TextShadow[]
  whiteSpace?: CSS.WhiteSpace | CSS.WhiteSpace[]
  wordWrap?: CSS.WordWrap | CSS.WordWrap[]
  wordBreak?: CSS.WordBreak | CSS.WordBreak[]
  fill?: CSS.Fill | CSS.Fill[]
  filter?: CSS.Filter | CSS.Filter[]
  stroke?: CSS.Stroke | CSS.Stroke[]
  transition?: CSS.Transition | CSS.Transition[]
  transitionDelay?: CSS.TransitionDelay | CSS.TransitionDelay[]
  transitionDuration?: CSS.TransitionDuration | CSS.TransitionDuration[]
  TransitionProperty?: CSS.TransitionProperty | CSS.TransitionProperty[]
  TransitionTimingFunction?: CSS.TransitionTimingFunction | CSS.TransitionTimingFunction[]
  transform?: CSS.Transform | CSS.Transform[]
  cursor?: CSS.Cursor | CSS.Cursor[]
  resize?: CSS.Resize | CSS.Resize[]
  objectFit?: CSS.ObjectFit | CSS.ObjectFit[]
  userSelect?: CSS.UserSelect | CSS.UserSelect[]
  appearance?: CSS.Appearance | CSS.Appearance[]
  pointerEvents?: CSS.PointerEvents | CSS.PointerEvents[]
  content?: CSS.Content | CSS.PointerEvents[]
}

export type PseudoSelectorProps = {
  _forwardSelector?: { selector: string } & LayoutProps,
  _hf?: LayoutProps,
  _hfa?: LayoutProps,
  _hfaa?: LayoutProps,
  _fa?: LayoutProps,
  _faa?: LayoutProps,
  _hover?: LayoutProps
  _focus?: LayoutProps
  _active?: LayoutProps
  _activeClass?: LayoutProps
  _activeLink?: LayoutProps
  _after?: LayoutProps
  _autofill?: LayoutProps
  _before?: LayoutProps
  _checked?: LayoutProps
  _empty?: LayoutProps
  _even?: LayoutProps
  _expanded?: LayoutProps
  _first?: LayoutProps
  _firstChild?: LayoutProps
  _focusVisible?: LayoutProps
  _focusWithin?: LayoutProps
  _fullScreen?: LayoutProps
  _grabbed?: LayoutProps
  _hidden?: LayoutProps
  _highlighted?: LayoutProps
  _indeterminate?: LayoutProps
  _invalid?: LayoutProps
  _last?: LayoutProps
  _lastChild?: LayoutProps
  _loading?: LayoutProps
  _notFirst?: LayoutProps
  _notLast?: LayoutProps
  _odd?: LayoutProps
  _placeholder?: LayoutProps
  _pressed?: LayoutProps
  _readOnly?: LayoutProps
  _selected?: LayoutProps
  _selection?: LayoutProps
  _valid?: LayoutProps
  _visited?: LayoutProps
}

export type CssProps = LayoutProps & PseudoSelectorProps

export type ConfigProps = {
  space?: number[]
  fontSize?: number[]
  breakpoints?: number[]
  remBase?: number
  color?: { [color: string]: { [intensity: number]: string } | string }
}

const defaultConfig: ConfigProps = {
  space: [0, 4, 8, 12, 16, 24, 32, 36, 64],
  fontSize: [0, 12, 14, 16, 20, 24, 32, 48, 64],
  breakpoints: [0, 600, 900, 1200],
  remBase: 10,
  color: {
    black: "#000",
    white: "#fff",
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    lightBlue: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    warmGray: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917"
    },
    trueGray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717"
    },
    gray: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b"
    },
    coolGray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    blueGray: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a"
    }
  }
};

const cssSelectorsOld = {
  margin: "space",
  m: {
    margin: "space"
  },
  marginTop: "space",
  mt: {
    marginTop: "space"
  },
  marginRight: "space",
  mr: {
    marginRight: "space"
  },
  marginBottom: "space",
  mb: {
    marginBottom: "space"
  },
  marginLeft: "space",
  ml: {
    marginLeft: "space"
  },
  marginX: {
    marginLeft: "space",
    marginRight: "space"
  },
  mx: {
    marginLeft: "space",
    marginRight: "space"
  },
  marginY: {
    marginTop: "space",
    marginBottom: "space"
  },
  my: {
    marginTop: "space",
    marginBottom: "space"
  },
  padding: "space",
  p: {
    padding: "space"
  },
  paddingTop: "space",
  pt: {
    paddingTop: "space"
  },
  paddingRight: "space",
  pr: {
    paddingRight: "space"
  },
  paddingBottom: "space",
  pb: {
    paddingBottom: "space"
  },
  paddingLeft: "space",
  pl: {
    paddingLeft: "space"
  },
  paddingX: {
    paddingLeft: "space",
    paddingRight: "space"
  },
  px: {
    paddingLeft: "space",
    paddingRight: "space"
  },
  paddingY: {
    paddingTop: "space",
    paddingBottom: "space"
  },
  py: {
    paddingTop: "space",
    paddingBottom: "space"
  },
  border: "space",
  borderWidth: "space",
  borderColor: "color",
  borderStyle: "",
  borderRadius: "space",
  borderTop: "space",
  borderTopWidth: "space",
  borderTopColor: "color",
  borderTopStyle: "",
  borderTopLeftRadius: "space",
  borderTopRightRadius: "space",
  borderBottom: "space",
  borderBottomWidth: "space",
  borderBottomColor: "color",
  borderBottomStyle: "",
  borderBottomLeftRadius: "space",
  borderBottomRightRadius: "space",
  borderLeft: "space",
  borderLeftWidth: "space",
  borderLeftColor: "color",
  borderLeftStyle: "",
  borderRight: "space",
  borderRightWidth: "space",
  borderRightColor: "",
  borderRightStyle: "",
  borderX: {
    borderLeft: "space",
    borderRight: "space"
  },
  borderXWidth: {
    borderLeftWidth: "space",
    borderRightWidth: "space"
  },
  borderXColor: {
    borderLeftColor: "color",
    borderRightColor: ""
  },
  borderXStyle: {
    borderLeftStyle: "",
    borderRightStyle: ""
  },
  borderY: {
    borderTop: "space",
    borderBottom: "space"
  },
  borderYWidth: {
    borderTopWidth: "space",
    borderBottomWidth: "space"
  },
  borderYColor: {
    borderTopColor: "color",
    borderBottomColor: "color"
  },
  borderYStyle: {
    borderTopStyle: "",
    borderBottomStyle: ""
  },
  width: "space",
  w: {
    width: "space"
  },
  height: "space",
  h: {
    height: "space"
  },
  size: {
    width: "space",
    height: "space"
  },
  minWidth: "space",
  minW: {
    minWidth: "space"
  },
  maxWidth: "space",
  maxW: {
    maxWidth: "space"
  },
  minHeight: "space",
  minH: {
    minHeight: "space"
  },
  maxHeight: "space",
  maxH: {
    maxHeight: "space"
  },
  display: "",
  d: {
    display: ""
  },
  verticalAlign: "",
  justifyContent: {
    "-ms-flex-pack": "",
    "-webkit-box-pack": "",
    justifyContent: ""
  },
  justify: {
    "-webkit-box-pack": "",
    "-ms-flex-pack": "",
    justifyContent: ""
  },
  alignItems: {
    "-ms-flex-align": "",
    "-webkit-box-align": "",
    alignItems: ""
  },
  align: {
    "-ms-flex-align": "",
    "-webkit-box-align": "",
    alignItems: ""
  },
  alignContent: {
    "-ms-flex-line-pack": "",
    alignContent: ""
  },
  flexDirection: {
    "-ms-flex-direction": "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    flexDirection: ""
  },
  direction: {
    "-ms-flex-direction": "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    flexDirection: ""
  },
  flex: {
    "-mx-flex": "",
    "webkit-box-flex": "",
    "webkit-flex": "",
    flex: ""
  },
  flexWrap: {
    "-ms-flex-wrap": "",
    flexWrap: ""
  },
  wrap: {
    "-ms-flex-wrap": "",
    flexWrap: ""
  },
  flexBasis: {
    "-ms-flex-preferred-size": "",
    "-mx-flex": "",
    flexBasis: ""
  },
  flexGrow: {
    "-ms-flex-positive": "",
    "-webkit-box-flex": "",
    flexGrow: ""
  },
  flexShrink: {
    "-ms-flex-negative": "",
    flexShrink: ""
  },
  alignSelf: {
    "-ms-grid-row-align": "",
    alignSelf: ""
  },
  justifySelf: {
    "-ms-grid-column-align": "",
    justifySelf: ""
  },
  order: {
    "-ms-flex-order": "",
    "-webkit-box-ordinal-group": "",
    order: ""
  },
  gridGap: "space",
  gap: { gridGap: `gridGap` },
  gridRowGap: "space",
  gridColumnGap: "space",
  gridColumn: "",
  gridRow: "",
  gridArea: "",
  gridAutoFlow: "",
  gridAutoRows: "",
  gridAutoColumns: "",
  gridTemplateRows: {
    "-ms-grid-rows": "",
    gridTemplateRows: ""
  },
  gridTemplateColumns: {
    "-ms-grid-columns": "",
    gridTemplateColumns: ""
  },
  gridTemplateAreas: "",
  position: "",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  zIndex: "zIndices",
  overflow: "",
  overflowX: "",
  overflowY: "",
  color: "color",
  background: "color",
  bg: {
    background: "color"
  },
  opacity: "",
  backgroundAttachment: "",
  backgroundClip: {
    "-webkit-background-clip": "",
    backgroundClip: ""
  },
  backgroundColor: "color",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "space",
  backgroundPositionY: "space",
  backgroundSize: "space",
  backdropFilter: {
    "-webkit-backdropFilter": "",
    backdropFilter: ""
  },
  boxShadow: {
    "-webkit-box-shadow": "",
    boxShadow: ""
  },
  outline: "",
  outlineColor: "color",
  outlineOffset: "space",
  outlineStyle: "",
  outlineWidth: "space",
  visibility: "",
  fontFamily: "",
  fontSize: "fontSize",
  fz: { fontSize: "fontSize" },
  fontWeight: "",
  fw: { fontWeight: "fontWeight" },
  lineHeight: "",
  letterSpacing: "",
  textAlign: "",
  fontStyle: "",
  textDecoration: "",
  textTransform: "",
  textShadow: "",
  whiteSpace: "",
  wordWrap: "",
  wordBreak: "",
  fill: "",
  filter: {
    "-webkit-filter": "",
    filter: ""
  },
  stroke: "",
  transition: {
    "-o-transition": "",
    "-webkit-transition": "",
    transition: ""
  },
  transitionDelay: {
    "-webkit-transition-delay": ``,
    transitionDelay: ""
  },
  transitionDuration: {
    "-webkit-transition-duration": ``,
    transitionDuration: ""
  },
  TransitionProperty: {
    "-webkit-transition-property": ``,
    TransitionProperty: ""
  },
  TransitionTimingFunction: {
    "-webkit-transition-timing-function": ``,
    TransitionTimingFunction: ""
  },
  transform: {
    "-ms-transform": "",
    "-webkit-transform": "",
    transform: ""
  },
  cursor: "",
  resize: "",
  objectFit: {
    "-o-object-fit": "",
    objectFit: ""
  },
  userSelect: {
    "-webkit-user-select": "",
    "-moz-user-select": "",
    "-ms-user-select": "",
    userSelect: ""
  },
  appearance: {
    "-webkit-appearance": "",
    appearance: ""
  },
  pointerEvents: "",
  content: ""
};
const cssSelectors = {
  "margin": ["space", [`m`]],
  "m": [{ "margin": "space" }, [`m`]],
  "marginTop": ["space", [`mt`]],
  "mt": [{ "marginTop": "space" }, [`mt`]],
  "marginRight": ["space", [`mr`]],
  "mr": [{ "marginRight": "space" }, [`mr`]],
  "marginBottom": ["space", [`mb`]],
  "mb": [{ "marginBottom": "space" }, [`mb`]],
  "marginLeft": ["space", [`ml`]],
  "ml": [{ "marginLeft": "space" }, [`ml`]],
  "marginX": [{ "marginLeft": "space", "marginRight": "space" }, [`mx`]],
  "mx": [{ "marginLeft": "space", "marginRight": "space" }, [`mx`]],
  "marginY": [{ "marginTop": "space", "marginBottom": "space" }, [`my`]],
  "my": [{ "marginTop": "space", "marginBottom": "space" }, [`my`]],
  "padding": ["space", [`p`]],
  "p": [{ "padding": "space" }, [`p`]],
  "paddingTop": ["space", [`pt`]],
  "pt": [{ "paddingTop": "space" }, [`pt`]],
  "paddingRight": ["space", [`pr`]],
  "pr": [{ "paddingRight": "space" }, [`pr`]],
  "paddingBottom": ["space", [`pb`]],
  "pb": [{ "paddingBottom": "space" }, [`pb`]],
  "paddingLeft": ["space", [`pl`]],
  "pl": [{ "paddingLeft": "space" }, [`pl`]],
  "paddingX": [{ "paddingLeft": "space", "paddingRight": "space" }, [`px`]],
  "px": [{ "paddingLeft": "space", "paddingRight": "space" }, [`px`]],
  "paddingY": [{ "paddingTop": "space", "paddingBottom": "space" }, [`py`]],
  "py": [{ "paddingTop": "space", "paddingBottom": "space" }, [`py`]],
  "border": ["space", [`b`]],
  "borderWidth": ["space", [`bw`]],
  "borderColor": ["color", [`bc`]],
  "borderStyle": ["", [`bs`]],
  "borderRadius": ["space", [`br`]],
  "borderTop": ["space", [`bt`]],
  "borderTopWidth": ["space", [`btw`]],
  "borderTopColor": ["color", [`btc`]],
  "borderTopStyle": ["", [`bts`]],
  "borderTopLeftRadius": ["space", [`btlr`]],
  "borderTopRightRadius": ["space", [`btrr`]],
  "borderBottom": ["space", [`bb`]],
  "borderBottomWidth": ["space", [`bbw`]],
  "borderBottomColor": ["color", [`bbc`]],
  "borderBottomStyle": ["", [`bbs`]],
  "borderBottomLeftRadius": ["space", [`bblr`]],
  "borderBottomRightRadius": ["space", [`bbrr`]],
  "borderLeft": ["space", [`bl`]],
  "borderLeftWidth": ["space", [`blw`]],
  "borderLeftColor": ["color", [`blc`]],
  "borderLeftStyle": ["", [`bls`]],
  "borderRight": ["space", [`br`]],
  "borderRightWidth": ["space", [`brw`]],
  "borderRightColor": ["", [`brc`]],
  "borderRightStyle": ["", [`brs`]],
  "borderX": [{ "borderLeft": "space", "borderRight": "space" }, [`bx`]],
  "borderXWidth": [{ "borderLeftWidth": "space", "borderRightWidth": "space" }, [`bxw`]],
  "borderXColor": [{ "borderLeftColor": "color", "borderRightColor": "" }, [`bxc`]],
  "borderXStyle": [{ "borderLeftStyle": "", "borderRightStyle": "" }, [`bxs`]],
  "borderY": [{ "borderTop": "space", "borderBottom": "space" }, [`by`]],
  "borderYWidth": [{ "borderTopWidth": "space", "borderBottomWidth": "space" }, [`byw`]],
  "borderYColor": [{ "borderTopColor": "color", "borderBottomColor": "color" }, [`byc`]],
  "borderYStyle": [{ "borderTopStyle": "", "borderBottomStyle": "" }, [`bys`]],
  "width": ["space", [`w`]],
  "w": [{ "width": "space" }, [`w`]],
  "height": ["space", [`h`]],
  "h": [{ "height": "space" }, [`h`]],
  "size": [{ "width": "space", "height": "space" }, [`s`]],
  "minWidth": ["space", [`minw`]],
  "minW": [{ "minWidth": "space" }, [`minw`]],
  "maxWidth": ["space", [`maxw`]],
  "maxW": [{ "maxWidth": "space" }, [`maxw`]],
  "minHeight": ["space", [`minh`]],
  "minH": [{ "minHeight": "space" }, [`minh`]],
  "maxHeight": ["space", [`maxh`]],
  "maxH": [{ "maxHeight": "space" }, [`maxh`]],
  "display": ["", [`d`]],
  "d": [{ "display": "" }, [`d`]],
  "verticalAlign": ["", [`va`]],
  "justifyContent": [{ "-ms-flex-pack": "", "-webkit-box-pack": "", "justifyContent": "" }],
  "justify": [{ "-webkit-box-pack": "", "-ms-flex-pack": "", "justifyContent": "" }],
  "alignItems": [{ "-ms-flex-align": "", "-webkit-box-align": "", "alignItems": "" }],
  "align": [{ "-ms-flex-align": "", "-webkit-box-align": "", "alignItems": "" }],
  "alignContent": [{ "-ms-flex-line-pack": "", "alignContent": "" }],
  "flexDirection": [{ "-ms-flex-direction": "", "-webkit-box-orient": "", "-webkit-box-direction": "", "flexDirection": "" }],
  "direction": [{ "-ms-flex-direction": "", "-webkit-box-orient": "", "-webkit-box-direction": "", "flexDirection": "" }],
  "flex": [{ "-mx-flex": "", "webkit-box-flex": "", "webkit-flex": "", "flex": "" }],
  "flexWrap": [{ "-ms-flex-wrap": "", "flexWrap": "" }],
  "wrap": [{ "-ms-flex-wrap": "", "flexWrap": "" }],
  "flexBasis": [{ "-ms-flex-preferred-size": "", "-mx-flex": "", "flexBasis": "" }],
  "flexGrow": [{ "-ms-flex-positive": "", "-webkit-box-flex": "", "flexGrow": "" }],
  "flexShrink": [{ "-ms-flex-negative": "", "flexShrink": "" }],
  "alignSelf": [{ "-ms-grid-row-align": "", "alignSelf": "" }],
  "justifySelf": [{ "-ms-grid-column-align": "", "justifySelf": "" }],
  "order": [{ "-ms-flex-order": "", "-webkit-box-ordinal-group": "", "order": "" }],
  "gridGap": ["space"],
  "gap": [{ "gridGap": "gridGap" }],
  "gridRowGap": ["space"],
  "gridColumnGap": ["space"],
  "gridColumn": [""],
  "gridRow": [""],
  "gridArea": [""],
  "gridAutoFlow": [""],
  "gridAutoRows": [""],
  "gridAutoColumns": [""],
  "gridTemplateRows": [{ "-ms-grid-rows": "", "gridTemplateRows": "" }],
  "gridTemplateColumns": [{ "-ms-grid-columns": "", "gridTemplateColumns": "" }],
  "gridTemplateAreas": [""],
  "position": ["",[`pos`]],
  "top": ["space"],
  "right": ["space"],
  "bottom": ["space"],
  "left": ["space"],
  "zIndex": ["zIndices"],
  "overflow": [""],
  "overflowX": [""],
  "overflowY": [""],
  "color": ["color"],
  "background": ["color", [`bg`]],
  "bg": [{ "background": "color" }],
  "opacity": [""],
  "backgroundAttachment": ["", [`bga`]],
  "backgroundClip": [{ "-webkit-background-clip": "", "backgroundClip": "" }, [`bgclip`]],
  "backgroundColor": ["color", [`bgc`]],
  "backgroundImage": ["", [`bgi`]],
  "backgroundOrigin": ["", [`bgo`]],
  "backgroundPositionX": ["space", [`bgpx`]],
  "backgroundPositionY": ["space", [`bgpy`]],
  "backgroundSize": ["space", [`bgs`]],
  "backdropFilter": [{ "-webkit-backdropFilter": "", "backdropFilter": "" }],
  "boxShadow": [{ "-webkit-box-shadow": "", "boxShadow": "" }],
  "outline": [""],
  "outlineColor": ["color"],
  "outlineOffset": ["space"],
  "outlineStyle": [""],
  "outlineWidth": ["space"],
  "visibility": [""],
  "fontFamily": [""],
  "fontSize": ["fontSize",[`fz`]],
  "fz": [{ "fontSize": "fontSize" },[`fz`]],
  "fontWeight": ["",[`fw`]],
  "fw": [{ "fontWeight": "fontWeight" },[`fw`]],
  "weight": [{ "fontWeight": "fontWeight" },[`fw`]],
  "lineHeight": ["",[`lh`]],
  "letterSpacing": ["",[`ls`]],
  "textAlign": ["",[`talign`]],
  "fontStyle": [""],
  "textDecoration": [""],
  "textTransform": [""],
  "textShadow": [""],
  "whiteSpace": [""],
  "wordWrap": [""],
  "wordBreak": [""],
  "fill": [""],
  "filter": [{ "-webkit-filter": "", "filter": "" }],
  "stroke": [""],
  "transition": [{ "-o-transition": "", "-webkit-transition": "", "transition": "" }],
  "transitionDelay": [{ "-webkit-transition-delay": "", "transitionDelay": "" }],
  "transitionDuration": [{ "-webkit-transition-duration": "", "transitionDuration": "" }],
  "TransitionProperty": [{ "-webkit-transition-property": "", "TransitionProperty": "" }],
  "TransitionTimingFunction": [{ "-webkit-transition-timing-function": "", "TransitionTimingFunction": "" }],
  "transform": [{ "-ms-transform": "", "-webkit-transform": "", "transform": "" }],
  "cursor": [""],
  "resize": [""],
  "objectFit": [{ "-o-object-fit": "", "objectFit": "" }],
  "userSelect": [{ "-webkit-user-select": "", "-moz-user-select": "", "-ms-user-select": "", "userSelect": "" }],
  "appearance": [{ "-webkit-appearance": "", "appearance": "" }],
  "pointerEvents": [""],
  "content": ["content"]
};

const pseudoSelectors = {
  _forwardSelector: `& ~`,
  _hf: `&:hover, &[data-hover], &:focus, &[data-focus]`,
  _hfa: `&:hover, &[data-hover], &:focus, &[data-focus], &:active, &[data-active]`,
  _hfaa: `&:hover, &[data-hover], &:focus, &[data-focus], &:active, &[data-active], &.active`,
  _fa: `&:focus, &[data-focus], &:active, &[data-active]`,
  _faa: `&:focus, &[data-focus], &:active, &[data-active], &.active`,
  _active: "&:active, &[data-active]",
  _activeClass: `&.active`,
  _activeLink: "&[aria-current=page]",
  _after: "&::after",
  _autofill: "&:-webkit-autofill",
  _before: "&::before",
  _checked: "&[aria-checked=true], &[data-checked]",
  _empty: "&:empty",
  _even: "&:nth-of-type(even)",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _first: "&:first-of-type",
  _firstChild: "& > :first-child",
  _focus: "&:focus, &[data-focus]",
  _focusVisible: "&:focus-visible",
  _focusWithin: "&:focus-within",
  _fullScreen: "&:fullscreen",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _hidden: "&[hidden], &[data-hidden]",
  _highlighted: "&[data-highlighted]",
  _hover: "&:hover, &[data-hover]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _last: "&:last-of-type",
  _lastChild: "& > :last-child",
  _loading: "&[data-loading], &[aria-busy=true]",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _odd: "&:nth-of-type(odd)",
  _placeholder: "&::placeholder",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _selection: "&::selection",
  _valid: "&[data-valid], &[data-state=valid]",
  _visited: "&:visited"
};

function toCssProperty(JsSyntax: string): string {
  return JsSyntax.replace(/([A-Z])/g, `-$1`).toLowerCase();
}

function parseCssVariables(val: string | number) {
  return val.toString().replace(/^--.+/, (match) => `var(${match})`).replace(/^$/, "''");
}

function parseCssSizes(val: number | string, type: "" | "fontSize" | "space", { remBase, ...cfg }): string {
  
  if (typeof val === "string") {
    return val.replace(/([\d.]+)px/gi, (match) => `${parseFloat(match) / remBase}rem`);
  }
  if (typeof val === "number" && val >= 0 && val < cfg[type].length && val % 1 === 0) {
    return `${cfg[type][val] / remBase}rem`;
  }
  if (typeof val === "number" && val < 0 && val * -1 < cfg[type].length && val % 1 === 0) {
    return `-${cfg[type][val * -1] / remBase}rem`;
  }
  if (typeof val === "number") {
    return `${val / remBase}rem`;
  }
}

function getResponsiveValue(val: string | number | (string | number)[], bp: number) {
  if (!Array.isArray(val)) return val;
  return val[val.length - 1 >= bp ? bp : val.length - 1];
}

function toCssValue(key: "" | "fontSize" | "space" | "content", val: string | number, cfg): string {
  if (key === 'content') return `"${val}"`
  if (cfg[key]) {
    return parseCssVariables(parseCssSizes(val, key, cfg));
  }
 
  return parseCssVariables(val);
}

function createStyleString(parsedCssProps: LayoutProps, breakpoint = 0, cfg: ConfigProps): string {
  
  return Object.entries(parsedCssProps).reduce((acc, [key, val]) => {
    if (key === "selector") return acc;
    if (breakpoint === 0) {
      if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
        acc += `display:-webkit-box;`;
        acc += `display:-webkit-flex;`;
        acc += `display:-ms-flexbox;`;
        acc += `display:flex;`;
      } else if (typeof cssSelectors[key][0] === "string") {
        acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key][0], getResponsiveValue(val, breakpoint), cfg)};`;
      } else if (cssSelectors[key][0] !== undefined) {
        Object.entries(cssSelectors[key][0]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
          acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint), cfg)};`;
        });
      }
    } else if (Array.isArray(val) && val.length - 1 >= breakpoint) {
      if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
        acc += `display:-webkit-box;`;
        acc += `display:-webkit-flex;`;
        acc += `display:-ms-flexbox;`;
        acc += `display:flex;`;
      } else if (typeof cssSelectors[key][0] === "string") {
        acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key][0], getResponsiveValue(val, breakpoint), cfg)};`;
      } else if (cssSelectors[key][0] !== undefined) {
        Object.entries(cssSelectors[key][0]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
          acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint), cfg)};`;
        });
      }
    }
    return acc;
  }, "");
}

function createSingleStyle([key, val]: any, breakpoint = 0, cfg: ConfigProps): string {
  let acc = "";
  if (key === "selector") return acc;
  if (breakpoint === 0) {
    if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
      acc += `display:-webkit-box;`;
      acc += `display:-webkit-flex;`;
      acc += `display:-ms-flexbox;`;
      acc += `display:flex;`;
    } else if (typeof cssSelectors[key][0] === "string") {
      acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key][0], getResponsiveValue(val, breakpoint), cfg)};`;
    } else if (cssSelectors[key][0] !== undefined) {
      Object.entries(cssSelectors[key][0]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
        acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint), cfg)};`;
      });
    }
  } else if (Array.isArray(val) && val.length - 1 >= breakpoint) {
    if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
      acc += `display:-webkit-box;`;
      acc += `display:-webkit-flex;`;
      acc += `display:-ms-flexbox;`;
      acc += `display:flex;`;
    } else if (typeof cssSelectors[key][0] === "string") {
      acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key][0], getResponsiveValue(val, breakpoint), cfg)};`;
    } else if (cssSelectors[key][0] !== undefined) {
      Object.entries(cssSelectors[key][0]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
        acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint), cfg)};`;
      });
    }
  }
  
  return acc;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function nextStyledSystem(props: any, config: ConfigProps = {}): { id?: string; styles?: string; styleArray: [string, string][]; filteredProps? } {
  
  if (!("breakpoints" in config)) config.breakpoints = defaultConfig.breakpoints;
  if (!("remBase" in config)) config.remBase = defaultConfig.remBase;
  if (!("space" in config)) config.space = defaultConfig.space;
  if (!("fontSize" in config)) config.fontSize = defaultConfig.fontSize;
  const { breakpoints } = config;
  
  const filteredProps = /*useMemo(() => */Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] === undefined && pseudoSelectors[k] === undefined && k !== "HTMLTag" && k !== "forwardedRef") {
      return { ...a, [k]: v };
    }
    return a;
  }, {});/*, [props]);*/
  const cssProps = /*useMemo(() => */Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] !== undefined && pseudoSelectors[k] === undefined) {
      return { ...a, [k]: v };
    }
    return a;
  }, {});/*, [props]);*/
  const pseudoProps = /*useMemo(() => */Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] === undefined && pseudoSelectors[k] !== undefined) {
      return { ...a, [k]: v };
    }
    return a;
  }, {});/*, [props]);*/
  
  const base = breakpoints.map((bp, i) => createStyleString(cssProps, i, config)
    && `${i !== 0
          ? `@media screen and (min-width: ${bp}px){`
          : ""}&{${createStyleString(cssProps, i, config)}}${i !== 0 ? `}` : ""}`).join("");
  
  const pseudo = Object.entries(pseudoProps).map(([k, v]) => breakpoints.map((bp, i) => createStyleString(v, i, config)
    && `${i !== 0
          ? `@media screen and (min-width: ${bp}px){`
          : ""}${pseudoSelectors[k]}{${createStyleString(v, i, config)}}${i !== 0 ? `}` : ""}`).join("")).join("");
  
  const styles = [];
  
  /*= =============== Create Styles & Classes - CSS Selectors ================ */
  Object.entries(cssProps).forEach(([key, val]: [ string, string | number | (string | number)[]]) => {
    const style = createSingleStyle([key, val], 0, config);
    const cssValue = toCssValue(typeof cssSelectors[key][0] === "string" ? cssSelectors[key][0] : cssSelectors[key][0][Object.keys(cssSelectors[key][0])[0]], getResponsiveValue(val, 0), config).split(' ');
    const cleanCssValue = cssValue.map(val=> val.match(/rem$/) ? String(+val.replace(/rem$/, '') * 10) : val).join('-');
    const className = `${cssSelectors[key][1] ? cssSelectors[key][1][0] : key}-${cleanCssValue.replace(/\s/g, "-").replace(/[!&\/\\#,+()$~%.'":*?<>{}]/g,'')}`;
    styles.push([className, `.${className.replace(/([%])/g, "\\$1")}{${style}}`]);
    if (Array.isArray(val)) {
      for (let i = 1; i < breakpoints.length; i++) {
        const responsiveStyle = createSingleStyle([key, val], i, config);
        if (val.length > i) {
          const cssValue = toCssValue(typeof cssSelectors[key][0] === "string" ? cssSelectors[key][0] : cssSelectors[key][0][Object.keys(cssSelectors[key][0])[0]], getResponsiveValue(val, i), config).split(' ');
          const cleanCssValue = cssValue.map(val=> val.match(/rem$/) ? String(+val.replace(/rem$/, '') * 10) : val).join('-');
          const className = `bp${i}_${cssSelectors[key][1] ? cssSelectors[key][1][0] : key}-${cleanCssValue.replace(/\s/g, "-").replace(/[!&\/\\#,+()$~%.'":*?<>{}]/g,'')}`;
          styles.push([
            className,
            `@media screen and (min-width: ${breakpoints[i]}px){.${className.replace(/([%])/g, "\\$1")}{${responsiveStyle}}}`
          ]);
        } else {
          break;
        }
      }
    }
  });
  
  /*= =============== Create Styles & Classes - PSEUDO SELECTORS ================ */
  Object.entries(pseudoProps).forEach(([k, v]) => {
    Object.entries(v).forEach(([key, val]) => {
      const style = createSingleStyle([key, val], 0, config);
      const className = `${k}-${cssSelectors[key][1] ? cssSelectors[key][1][0] : key}-${String(Array.isArray(val) ? val[0] : val).replace(/\s/g, "-")}`;
      const pseudoClassName = pseudoSelectors[k].replace(/&/gi, `.${className}`);
      styles.push([className, `${pseudoClassName.replace(/([%])/g, "\\$1")}{${style}}`]);
      
      if (Array.isArray(val)) {
        for (let i = 1; i < breakpoints.length; i++) {
          const responsiveStyle = createSingleStyle([key, val], i, config);
          if (val.length > i) {
            const className = `${k}-bp${i}-${cssSelectors[key][1] ? cssSelectors[key][1][0] : key}-${String(Array.isArray(val) ? val[i] : val).replace(/\s/g, "-")}`;
            const pseudoClassName = pseudoSelectors[k].replace(/&/gi, `.${className}`);
            styles.push([
              className,
              `@media screen and (min-width: ${breakpoints[i]}px){${pseudoClassName.replace(/([%])/g, "\\$1")}{${responsiveStyle}}}`
            ]);
          } else {
            break;
          }
        }
      }
    });
  });
  
  const id = (base + pseudo) !== "" ? String(hashString(base + pseudo)) : undefined;
  let style = (base + pseudo).replace(/&/g, `.jsx-${id}`);
  
  if (props._forwardSelector && props._forwardSelector.selector) {
    style = style.replace(/~/g, props._forwardSelector.selector);
  }
  
  return { id: id || undefined, styles: id ? style : undefined, styleArray: styles, filteredProps };
}