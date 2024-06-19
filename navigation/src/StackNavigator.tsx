import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
/**
 * Defines the structure for individual screen properties.
 */
type ScreenProps = {
  /**
   * Name of the screen. This must be unique within the navigator.
   */
  name: string;

  /**
   * React component that will be rendered for this screen.
   */
  component: React.ComponentType<any>;

  /**
   * Options for configuring the screen's navigator.
   */
  screenOptions?: StackNavigationOptions;

  /**
   * Additional props to be passed to the screen component.
   */
  additionalProps?: object;
};

/**
 * Defines the properties expected by the StackNavigator component.
 */
interface StackNavigatorProps {
  /**
   * The name of the route to start the navigator on.
   */
  initialRouteName: string;

  /**
   * Default options for the stack navigator.
   */
  stackOptions?: StackNavigationOptions;

  /**
   * Array of screen configurations.
   */
  screens: ScreenProps[];

  /**
   * Additional properties for the navigator.
   */
  navigatorProps?: Partial<NavigatorScreenParams<any>>;
}
/**
 * Stack navigator component using react-navigation's createStackNavigator.
 *
 * @param initialRouteName - The initial route for the navigator.
 * @param stackOptions - Default options for the stack navigator.
 * @param screens - Array of screen configurations.
 * @param navigatorProps - Additional properties for the navigator.
 *
 * @returns A stack navigator component.
 */

const Stack = createStackNavigator<any>();

export const StackNavigator: React.FC<StackNavigatorProps> = ({
  initialRouteName,
  stackOptions,
  screens,
  navigatorProps,
}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={stackOptions}
      {...navigatorProps}
    >
      {screens.map((screen) => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name}
          component={screen?.component}
          options={screen?.screenOptions}
          {...screen?.additionalProps}
        />
      ))}
    </Stack.Navigator>
  );
};

