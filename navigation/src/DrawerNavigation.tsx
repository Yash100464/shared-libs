import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';

/**
 * Defines the structure for individual drawer screen properties.
 */
type DrawerScreenProps = {
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
  screenOptions?: DrawerNavigationOptions;

  /**
   * Additional props to be passed to the screen component.
   */
  additionalProps?: object;
};

/**
 * Defines the properties expected by the DrawerNavigator component.
 */
interface DrawerNavigatorProps {
  /**
   * Array of drawer screen configurations.
   */
  screens: DrawerScreenProps[];

  /**
   * Default options for the drawer navigator.
   */
  drawerOptions?: DrawerNavigationOptions;

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
 * Drawer navigator component using react-navigation's createDrawerNavigator.
 * 
 * @param screens - Array of drawer screen configurations.
 * @param drawerOptions - Default options for the drawer navigator.
 * @param initialRouteName - The initial route for the navigator.
 * @param navigatorProps - Additional properties for the navigator.
 * 
 * @returns A drawer navigator component.
 */
const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({
  screens,
  drawerOptions,
  initialRouteName,
  navigatorProps,
}) => {
  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      screenOptions={drawerOptions}
      {...navigatorProps}
    >
      {screens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen?.screenOptions}
          {...screen?.additionalProps}
        />
      ))}
    </Drawer.Navigator>
  );
};

