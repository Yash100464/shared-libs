import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider, useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from './themes';
import { Text, Button, Appearance } from 'react-native';

// Helper component to test the useTheme hook
const ThemeConsumer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Text testID="text" style={{ color: theme.textColor }}>
        Theme Text
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </>
  );
};

describe('ThemeProvider', () => {
  it('provides the light theme by default', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const text = screen.getByTestId('text');
    expect(text.props.style).toMatchObject({ color: lightTheme.textColor });
  });

  it('toggles between light and dark themes', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const text = screen.getByTestId('text');
    const button = screen.getByText('Toggle Theme');

    // Initial theme should be light
    expect(text.props.style).toMatchObject({ color: lightTheme.textColor });

    // Toggle to dark theme
    fireEvent.press(button);
    expect(text.props.style).toMatchObject({ color: darkTheme.textColor });

    // Toggle back to light theme
    fireEvent.press(button);
    expect(text.props.style).toMatchObject({ color: lightTheme.textColor });
  });

  it('applies the default system theme', () => {
    const mockGetColorScheme = jest.spyOn(Appearance, 'getColorScheme');
    mockGetColorScheme.mockReturnValue('dark');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const text = screen.getByTestId('text');
    expect(text.props.style).toMatchObject({ color: darkTheme.textColor });

    mockGetColorScheme.mockRestore();
  });
});
