import type {
  BaseElementProps,
  BorderRadiusTypes,
  ColorTypes,
} from "@/theme/types";
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

export type StyledViewProps = PropsWithChildren<
  {
    bgColor?: ColorTypes | (string & {});
    borderRadius?: BorderRadiusTypes | (number & {});
    onPress?: () => void;
    disabled?: boolean;
  } & Omit<ViewStyle, "borderRadius"> &
    BaseElementProps
>;
