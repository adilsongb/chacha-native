import React from "react";
import { getRestPropsStyle } from "@/theme/styles";
import { Text } from "react-native";

import { useStyles } from "./Typography.styles";
import { useTheme } from "@/theme/context";
import type { ColorTypes } from "@/theme/types";
import type {
  TypographProps,
  TypographVariantsTypes,
} from "./Typography.types";

export const Typography = ({
  children,
  variant = "normal",
  color = "primary",
  textAlign = "auto",
  ...rest
}: TypographProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Text
      style={[
        styles[variant as TypographVariantsTypes],
        {
          color: theme.colors[color as ColorTypes] ?? color,
          textAlign,
          ...getRestPropsStyle(theme, rest),
        },
      ]}
    >
      {children}
    </Text>
  );
};
