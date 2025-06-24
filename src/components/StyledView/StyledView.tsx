import { Pressable, type StyleProp, View, type ViewStyle } from "react-native";
import { getRestPropsStyle } from "@/theme/style";
import { useTheme } from "@/theme/context";
import type { StyledViewProps } from "./StyledView.types";
import type { BorderRadiusTypes, ColorTypes } from "@/theme/types";

export const StyledView = ({
  children,
  onPress,
  disabled,
  bgColor,
  borderRadius,
  ...rest
}: StyledViewProps) => {
  const theme = useTheme();

  const viewStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.colors[bgColor as ColorTypes] ?? bgColor,
    borderRadius:
      theme.borderRadius[borderRadius as BorderRadiusTypes] ?? borderRadius,
    ...getRestPropsStyle(theme, rest),
    ...rest,
  };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [viewStyle, pressed && { opacity: 0.8 }]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={viewStyle}>{children}</View>;
};
