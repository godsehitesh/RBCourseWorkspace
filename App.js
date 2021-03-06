/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreen from './src/screens/ListScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScreen";
import PasswordScreen from "./src/screens/PasswordScreen";

  const navigator = createStackNavigator(
    {
      Home: HomeScreen,
      List: ListScreen,
      Components: ComponentsScreen,
      ImageScr: ImageScreen,
      Counter: CounterScreen,
      Colors: ColorsScreen,
      Square: SquareScreen,
      Password: PasswordScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  );

  const App = createAppContainer(navigator);

export default App;
