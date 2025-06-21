import { ThemeDefault } from "@/theme";

import type { BaseElementProps } from "./types";

export function getRestPropsStyle(props: BaseElementProps) {
  return {
    ...(props.m && { margin: ThemeDefault.margin[props.m] }),
    ...(props.mt && { marginTop: ThemeDefault.margin[props.mt] }),
    ...(props.mb && { marginBottom: ThemeDefault.margin[props.mb] }),
    ...(props.mr && { marginRight: ThemeDefault.margin[props.mr] }),
    ...(props.ml && { marginLeft: ThemeDefault.margin[props.ml] }),
    ...(props.mh && { marginHorizontal: ThemeDefault.margin[props.mh] }),
    ...(props.mv && { marginVertical: ThemeDefault.margin[props.mv] }),

    ...(props.p && { margin: ThemeDefault.padding[props.p] }),
    ...(props.pt && { marginTop: ThemeDefault.padding[props.pt] }),
    ...(props.pb && { marginBottom: ThemeDefault.padding[props.pb] }),
    ...(props.pr && { marginRight: ThemeDefault.padding[props.pr] }),
    ...(props.pl && { marginLeft: ThemeDefault.padding[props.pl] }),
    ...(props.ph && { marginHorizontal: ThemeDefault.padding[props.ph] }),
    ...(props.pv && { marginVertical: ThemeDefault.padding[props.pv] }),
  };
}
