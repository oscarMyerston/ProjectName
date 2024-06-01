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
  Text,
  SafeAreaView,
} from 'react-native';
import { Chair as BlackChair} from './Chair';
import Table from "./Table"

const App = ()  => {
  const [theme, setTheme] = use
  return (
    <SafeAreaView>

      <Text 
      style={ {margin:16, fontSize: 16} }
      onPress={() => setTheme('dark')}
      >Make Theme Dark</Text>

      <View>
        {/* Chair */}
        <BlackChair></BlackChair>
        
        {/* Table */}
        <Table></Table>
      </View>
    </SafeAreaView>
  );
};

export default App;
