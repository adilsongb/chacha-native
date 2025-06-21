import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from './Button.styles';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`${variant}Container`],
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
