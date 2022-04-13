/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './routers';
import {Provider} from 'react-redux';
import store from './redux/store';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
  <Provider store={store}>
  <Routes/>;
  </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
