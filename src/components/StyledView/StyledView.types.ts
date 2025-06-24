import type { BaseElementProps, ColorTypes } from "@/theme/types";
import type { PropsWithChildren } from "react";

export type StyledViewProps = PropsWithChildren<
  {
    bgColor?: ColorTypes | (string & {});
  } & BaseElementProps
>;
