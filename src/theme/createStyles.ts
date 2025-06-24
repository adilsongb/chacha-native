import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import type { Theme } from "./types";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function createStyles<T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) {
  return (theme: Theme) => StyleSheet.create(styles(theme));
}
