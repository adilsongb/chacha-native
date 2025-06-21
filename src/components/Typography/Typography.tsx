import { ThemeDefault } from "@/theme";
import { getRestPropsStyle } from "@/theme/style";
import { Text } from "react-native";

import styles from "./Typography.styles";
import type { TypographProps } from "./Typography.types";

export const Typograph = ({
  children,
  variant,
  color = "black",
  textAlign = "auto",
  ...rest
}: TypographProps) => {
  return (
    <Text
      style={[
        styles[variant],
        {
          color: ThemeDefault.color[color],
          textAlign,
          ...getRestPropsStyle({ ...rest }),
        },
      ]}
    >
      {children}
    </Text>
  );
}
