import type { BaseElementProps, ColorTypes } from "@/theme/types";
import type { ReactNode } from "react";
import type { TextStyle } from "react-native";

import { useStyles } from "./Typography.styles";

type TextAlignType = Pick<TextStyle, "textAlign">;

type TextAlignTypeDirect = TextAlignType[keyof TextAlignType];

export type TypographVariantsTypes = keyof ReturnType<typeof useStyles>;

export type TypographProps = {
  children: ReactNode;
  variant?: TypographVariantsTypes | (string & {});
  color?: ColorTypes | (string & {});
  textAlign?: TextAlignTypeDirect;
} & BaseElementProps;
