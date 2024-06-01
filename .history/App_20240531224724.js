/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Chair as BlackChair} from './Chair';
import Table from "./Table"

const App = ()  => {
  const [theme, setTheme] = useState('light')
  return (
    <SafeAreaView>

      <Text 
      style={{margin:16, fontSize: 16}}
      onPress={() => setTheme('dark')}
      >Make Theme Dark</Text>

      <View>
        {/* Chair */}
        <BlackChair theme={theme}/>
        
        {/* Table */}
        <Table/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  themeHeader: {
    margin: 16,
    fontSize: 16,
    backgroundColor
  }
})

export default App;
