import React, { useState } from "react";
// import { type LayoutChangeEvent } from "react-native";
import LottieView from "lottie-react-native";

// import { useStyles } from "./Button.styles";
import { type ButtonProps } from "./Button.types";
import { Typograph } from "../Typography";
// import { useTheme } from "@/theme/context";
import { StyledView } from "../StyledView";

export const Button = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  // const theme = useTheme();
  // const styles = useStyles(theme);

  const [buttonHeight, _setButtonHeight] = useState<number>(0);

  // const handleLayout = (event: LayoutChangeEvent) => {
  //   const { height } = event.nativeEvent.layout;
  //   setButtonHeight(height);
  // };

  return (
    <StyledView
      bgColor="primary"
      onPress={onPress}
      disabled={disabled || loading}
      height={58}
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      p="md"
    >
      {loading ? (
        <LottieView
          source={require("../../assets/loading.json")}
          style={{ width: "100%", height: buttonHeight || 54 }}
          autoPlay
          loop
        />
      ) : (
        <Typograph variant="medium" color="white">
          {title}
        </Typograph>
      )}
    </StyledView>
  );
};
