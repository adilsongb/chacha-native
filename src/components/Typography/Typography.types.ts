import type { BaseElementProps, ColorTypes } from "@/theme/types";
import type { TextStyle } from "react-native";
import type { PropsWithChildren } from "react";

import { useStyles } from "./Typography.styles";

type TextAlignType = Pick<TextStyle, "textAlign">;

type TextAlignTypeDirect = TextAlignType[keyof TextAlignType];

export type TypographVariantsTypes = keyof ReturnType<typeof useStyles>;

export type TypographProps = PropsWithChildren<
  {
    variant?: TypographVariantsTypes | (string & {});
    color?: ColorTypes | (string & {});
    textAlign?: TextAlignTypeDirect;
  } & BaseElementProps
>;
