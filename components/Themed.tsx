import React from 'react';
import {
  useColorScheme,
  StyleSheet,
  Text as DefaultText,
  TextInput as DefaultTextInput,
  TouchableOpacity,
  View as DefaultView,
} from 'react-native';

import Colors from '../constants/Colors';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

interface ThemeProps {
  lightColor?: string;
  darkColor?: string;
}

export type ButtonProps = ThemeProps & DefaultPressable['props'];
export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    margin: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    lineHeight: 21,
    textTransform: 'uppercase',
  },
});

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, title, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'main',
  );

  return (
    <TouchableOpacity
      style={[{ backgroundColor, color }, buttonStyles.container, style]}
      {...otherProps}
    >
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
