import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

interface AppNavigationContainerProps {
  /**
   * The navigator component to be rendered inside the NavigationContainer.
   */
  children: React.ReactNode;
}

/**
 * A component that wraps a given navigator in a NavigationContainer.
 * 
 * @param children - The navigator component to be rendered inside the NavigationContainer.
 * 
 * @returns A NavigationContainer with the specified navigator.
 */
export const AppNavigationContainer: React.FC<AppNavigationContainerProps> = ({
  children,
}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

