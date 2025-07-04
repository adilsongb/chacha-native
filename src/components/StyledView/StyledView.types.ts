import type {
  BaseElementProps,
  BorderRadiusTypes,
  ColorTypes,
} from "@/theme/types";
import type { PropsWithChildren } from "react";
import type { PressableProps, ViewStyle } from "react-native";

export type StyledViewProps = PropsWithChildren<
  {
    bgColor?: ColorTypes | (string & {});
    borderRadius?: BorderRadiusTypes | (number & {});
    onPressOpacity?: number;
    disabled?: boolean;
  } & Omit<ViewStyle, "borderRadius"> &
    PressableProps &
    BaseElementProps
>;
