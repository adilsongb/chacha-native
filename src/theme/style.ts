import type { BaseElementProps, Theme } from "./types";

export function getRestPropsStyle(theme: Theme, props: BaseElementProps) {
  return {
    ...(props.m && { margin: theme.spacing[props.m] ?? props.m }),
    ...(props.mt && { marginTop: theme.spacing[props.mt] ?? props.mt }),
    ...(props.mb && { marginBottom: theme.spacing[props.mb] ?? props.mb }),
    ...(props.mr && { marginRight: theme.spacing[props.mr] ?? props.mr }),
    ...(props.ml && { marginLeft: theme.spacing[props.ml] ?? props.ml }),
    ...(props.mh && { marginHorizontal: theme.spacing[props.mh] ?? props.mh }),
    ...(props.mv && { marginVertical: theme.spacing[props.mv] ?? props.mv }),

    ...(props.p && { padding: theme.spacing[props.p] ?? props.p }),
    ...(props.pt && { paddingTop: theme.spacing[props.pt] ?? props.pt }),
    ...(props.pb && { paddingBottom: theme.spacing[props.pb] ?? props.pb }),
    ...(props.pr && { paddingRight: theme.spacing[props.pr] ?? props.pr }),
    ...(props.pl && { paddingLeft: theme.spacing[props.pl] ?? props.pl }),
    ...(props.ph && { paddingHorizontal: theme.spacing[props.ph] ?? props.ph }),
    ...(props.pv && { paddingVertical: theme.spacing[props.pv] ?? props.pv }),
  };
}
