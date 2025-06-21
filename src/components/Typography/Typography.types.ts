import type { BaseElementProps, ColorTypes } from "@/theme/types";
import type { ReactNode } from "react";
import type { TextStyle } from "react-native";

import styles from "./Typography.styles";

type TextAlignType = Pick<TextStyle, "textAlign">;

type TextAlignTypeDirect = TextAlignType[keyof TextAlignType];

type VariantsTypes = keyof typeof styles;

export type TypographProps = {
  children: ReactNode;
  variant: VariantsTypes;
  color?: ColorTypes;
  textAlign?: TextAlignTypeDirect;
} & BaseElementProps;
