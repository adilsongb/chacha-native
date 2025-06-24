import { ThemeDefault } from "@/theme";

export type ColorTypes = keyof typeof ThemeDefault.colors;
export type SpacingTypes = keyof typeof ThemeDefault.spacing;

export type BaseElementProps = {
  m?: SpacingTypes | (string & {}) | (number & {});
  mr?: SpacingTypes | (string & {}) | (number & {});
  ml?: SpacingTypes | (string & {}) | (number & {});
  mt?: SpacingTypes | (string & {}) | (number & {});
  mb?: SpacingTypes | (string & {}) | (number & {});
  mh?: SpacingTypes | (string & {}) | (number & {});
  mv?: SpacingTypes | (string & {}) | (number & {});
  p?: SpacingTypes | (string & {}) | (number & {});
  pr?: SpacingTypes | (string & {}) | (number & {});
  pl?: SpacingTypes | (string & {}) | (number & {});
  pt?: SpacingTypes | (string & {}) | (number & {});
  pb?: SpacingTypes | (string & {}) | (number & {});
  ph?: SpacingTypes | (string & {}) | (number & {});
  pv?: SpacingTypes | (string & {}) | (number & {});
};

export type CustomColor = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  success: string;
  warning: string;
  [key: string]: string;
};

export type CustomSpacing = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  [key: string]: number;
};

export type CustomBorderRadius = {
  none: number;
  sm: number;
  md: number;
  lg: number;
  full: number;
  [key: string]: number;
};

export type CustomFontFamily = {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
};

export type CustomFontSize = {
  xs: number;
  sm: number;
  base: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
};

export type Theme = {
  colors: CustomColor;
  spacing: CustomSpacing;
  borderRadius: CustomBorderRadius;
  typography: {
    fontFamily: CustomFontFamily;
    fontSize: CustomFontSize;
    variants?: {
      [key: string]: {
        fontFamily: string;
        fontSize: string | number;
      };
    };
  };
};

export type CustomTheme = {
  colors: Partial<CustomColor>;
  spacing: Partial<CustomSpacing>;
  borderRadius: Partial<CustomBorderRadius>;
  typography: Partial<{
    fontFamily: Partial<CustomFontFamily>;
    fontSize: Partial<CustomFontSize>;
    variants?: {
      [key: string]: {
        fontFamily: string;
        fontSize: string | number;
      };
    };
  }>;
};
