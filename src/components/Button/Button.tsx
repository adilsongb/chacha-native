import React, { useMemo, useState } from "react";
import LottieView from "lottie-react-native";

import { type ButtonProps } from "./Button.types";
import { Typography } from "../Typography";
import { StyledView } from "../StyledView";
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
} from "react-native";
import { useTheme } from "@/theme/context";
import { autoAdjustColorBrightness } from "@/utils/styles";
import { StyledViewProps } from "../StyledView/StyledView.types";
import { TypographProps } from "../Typography/Typography.types";

export const Button = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "default",
  animated = true,
}: ButtonProps) => {
  const theme = useTheme();

  const [ripples, setRipples] = useState<
    {
      id: number;
      scale: Animated.Value;
      opacity: Animated.Value;
      x: number;
      y: number;
      isHeld: boolean;
    }[]
  >([]);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    setButtonWidth(event.nativeEvent.layout.width);
    setButtonHeight(event.nativeEvent.layout.height);
  };

  const rippleSize = Math.max(buttonWidth, buttonHeight);

  const handlePressIn = (event: GestureResponderEvent) => {
    if (!animated) return;

    const { locationX, locationY } = event.nativeEvent;
    const id = Date.now() + Math.random();
    const scale = new Animated.Value(0);
    const opacity = new Animated.Value(0.5);

    setRipples((prev) => [
      ...prev,
      { id, scale, opacity, x: locationX, y: locationY, isHeld: true },
    ]);

    Animated.timing(scale, {
      toValue: 0.5,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (!animated) return;

    setRipples((prev) => {
      prev.forEach((ripple) => {
        if (ripple.isHeld) {
          ripple.isHeld = false;
          Animated.parallel([
            Animated.timing(ripple.scale, {
              toValue: 2.5,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(ripple.opacity, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
          ]).start(() => {
            setRipples((old) => old.filter((r) => r.id !== ripple.id));
          });
        }
      });
      return [...prev];
    });
    if (onPress) onPress();
  };

  const styleVariant: { [key: string]: StyledViewProps | TypographProps } =
    useMemo(() => {
      if (variant === "outline") {
        return {
          container: {
            bgColor: "transparent",
            borderColor: "primary",
            borderWidth: 2,
          },
          text: {
            color: "primary",
          },
        };
      }
      return {
        container: {
          bgColor: disabled ? "buttonDisable" : "primary",
        },
        text: {
          color: disabled ? "buttonDisableText" : "buttonText",
        },
      };
    }, [variant, disabled]);

  return (
    <StyledView
      {...styleVariant.container}
      height={58}
      borderRadius="md"
      overflow="hidden"
    >
      <StyledView
        disabled={disabled || loading}
        onPress={onPress}
        onPressOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLayout={handleLayout}
        flex={1}
        position="absolute"
        zIndex={2}
        width="100%"
        top={0}
        bottom={0}
      />

      <StyledView
        justifyContent="center"
        alignContent="center"
        flex={1}
        zIndex={1}
      >
        {loading ? (
          <LottieView
            source={require("../../assets/loading.json")}
            style={{ width: "100%", height: buttonHeight || 54 }}
            autoPlay
            colorFilters={[
              {
                keypath: "Shape Layer 1.Stroke 1",
                color: theme.colors.buttonLoading,
              },
            ]}
            loop
          />
        ) : (
          <Typography
            {...styleVariant.text}
            variant="medium"
            textAlign="center"
          >
            {title}
          </Typography>
        )}
      </StyledView>

      {ripples.map((ripple) => (
        <Animated.View
          key={ripple.id}
          style={[
            {
              position: "absolute",
              backgroundColor: autoAdjustColorBrightness(theme.colors.primary),
              borderRadius: 9999,
              zIndex: 0,
            },
            {
              width: rippleSize,
              height: rippleSize,
              left: ripple.x - rippleSize / 2,
              top: ripple.y - rippleSize / 2,
              transform: [{ scale: ripple.scale }],
              opacity: ripple.opacity,
            },
          ]}
        />
      ))}
    </StyledView>
  );
};
