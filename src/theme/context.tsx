import React, { createContext, useContext } from "react";

import { ThemeDefault } from ".";
import type { CustomTheme, Theme } from "./types";

const ThemeContext = createContext<Theme>(ThemeDefault);

interface ThemeProviderProps {
  theme?: Partial<CustomTheme>;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: customTheme = {},
  children,
}) => {
  const theme: Theme = {
    ...ThemeDefault,
    ...customTheme,
    colors: {
      ...ThemeDefault.colors,
      ...customTheme.colors,
    },
    spacing: {
      ...ThemeDefault.spacing,
      ...customTheme.spacing,
    },
    borderRadius: {
      ...ThemeDefault.borderRadius,
      ...customTheme.borderRadius,
    },
    typography: {
      fontFamily: {
        ...ThemeDefault.typography.fontFamily,
        ...customTheme.typography?.fontFamily,
      },
      fontSize: {
        ...ThemeDefault.typography.fontSize,
        ...customTheme.typography?.fontSize,
      },
      variants: {
        ...customTheme.typography?.variants,
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};
