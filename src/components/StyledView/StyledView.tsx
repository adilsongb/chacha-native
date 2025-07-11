import React from "react";
import { Pressable, type StyleProp, View, type ViewStyle } from "react-native";
import { getRestPropsStyle } from "@/theme/styles";
import { useTheme } from "@/theme/context";
import type { StyledViewProps } from "./StyledView.types";
import type { BorderRadiusTypes, ColorTypes } from "@/theme/types";

export const StyledView = ({
  children,
  onPress,
  onPressOpacity,
  onPressIn,
  onPressOut,
  onLayout,
  disabled,
  bgColor,
  borderRadius,
  borderColor,
  ...rest
}: StyledViewProps) => {
  const theme = useTheme();

  const viewStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.colors[bgColor as ColorTypes] ?? bgColor,
    borderRadius:
      theme.borderRadius[borderRadius as BorderRadiusTypes] ?? borderRadius,
    borderColor: theme.colors[borderColor as ColorTypes] ?? borderColor,
    ...getRestPropsStyle(theme, rest),
    ...rest,
  };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLayout={onLayout}
        disabled={disabled}
        style={({ pressed }) => [
          viewStyle,
          pressed && { opacity: onPressOpacity ?? 0.8 },
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={viewStyle}>{children}</View>;
};
