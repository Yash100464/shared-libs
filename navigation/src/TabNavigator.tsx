import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

/**
 * Defines the structure for individual tab screen properties.
 */
type TabScreenProps = {
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
  screenOptions?: BottomTabNavigationOptions;

  /**
   * Additional props to be passed to the screen component.
   */
  additionalProps?: object;
};

/**
 * Defines the properties expected by the TabNavigator component.
 */
interface TabNavigatorProps {
  /**
   * Array of tab screen configurations.
   */
  screens: TabScreenProps[];

  /**
   * Default options for the tab navigator.
   */
  tabOptions?: BottomTabNavigationOptions;

  /**
   * The name of the route to start the navigator on.
   */
  initialRouteName?: string;

  /**
   * Additional properties for the navigator.
   */
  navigatorProps?: Partial<NavigatorScreenParams<any>>;
}

/**
 * Tab navigator component using react-navigation's createBottomTabNavigator.
 *
 * @param screens - Array of tab screen configurations.
 * @param tabOptions - Default options for the tab navigator.
 * @param initialRouteName - The initial route for the navigator.
 * @param navigatorProps - Additional properties for the navigator.
 *
 * @returns A bottom tab navigator component.
 */
const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC<TabNavigatorProps> = ({
  screens,
  tabOptions,
  initialRouteName,
  navigatorProps,
}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={tabOptions}
      {...navigatorProps}
    >
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen?.screenOptions}
          {...screen?.additionalProps}
        />
      ))}
    </Tab.Navigator>
  );
};

