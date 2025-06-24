import { createStyles } from "@/theme/createStyles";

export const useStyles = createStyles((theme) => ({
  h1: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize["2xl"],
    lineHeight: theme.typography.fontSize["2xl"] * 1.5,
  },
  h2: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.xl,
    lineHeight: theme.typography.fontSize.xl * 1.5,
  },
  h3: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: theme.typography.fontSize.lg * 1.5,
  },
  h4: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.fontSize.base * 1.5,
  },
  body1: {
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.fontSize.base * 1.5,
  },
  body2: {
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  normal: {
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.fontSize.base * 1.5,
  },
  medium: {
    fontFamily: theme.typography.fontFamily.medium,
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.fontSize.base * 1.5,
  },
  small: {
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  smallBold: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.fontSize.sm * 1.5,
  },
  ...theme.typography.variants,
}));
