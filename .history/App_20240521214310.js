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
import { Chair as BlackChair} from './Chair';
import { Table } from".7
const App = ()  => {

  return (
    <SafeAreaView>
      <View>
        <BlackChair></BlackChair>
      </View>
    </SafeAreaView>
  );
};

export default App;
