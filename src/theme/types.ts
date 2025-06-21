import { ThemeDefault } from "@/theme";

export type ColorTypes = keyof typeof ThemeDefault.color;
export type MarginTypes = keyof typeof ThemeDefault.margin;
export type PaddingTypes = keyof typeof ThemeDefault.padding;

export type BaseElementProps = {
  m?: MarginTypes;
  mr?: MarginTypes;
  ml?: MarginTypes;
  mt?: MarginTypes;
  mb?: MarginTypes;
  mh?: MarginTypes;
  mv?: MarginTypes;
  p?: PaddingTypes;
  pr?: PaddingTypes;
  pl?: PaddingTypes;
  pt?: PaddingTypes;
  pb?: PaddingTypes;
  ph?: PaddingTypes;
  pv?: PaddingTypes;
};
