import { View } from "react-native";
import { getRestPropsStyle } from "@/theme/style";
import { useTheme } from "@/theme/context";
import type { StyledViewProps } from "./StyledView.types";
import type { ColorTypes } from "@/theme/types";

export const StyledView = ({ children, bgColor, ...rest }: StyledViewProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors[bgColor as ColorTypes] ?? bgColor,
          ...getRestPropsStyle(theme, rest),
        },
      ]}
    >
      {children}
    </View>
  );
};
