/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { Chair as Blacc} from './Chair';

const App = ()  => {

  return (
    <SafeAreaView>
      <View>
        <Chair></Chair>
      </View>
    </SafeAreaView>
  );
};

export default App;
