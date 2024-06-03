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
import Splash from './src/screen/auth/Splash';

const App = ()  => {
  const [ theme, setTheme ] = useState('light')
  return (
    <SafeAreaView>

      <Text 
      style={styles.themeHeader}
      onPress={() => setTheme('dark')}
      >Make Theme Dark</Text>

    <Splash/>
    </SafeAreaView>
  );
};

const styles = {
  themeHeader: {
    margin: 16,
    fontSize: 16,
    backgroundColor: 'yellow'
  }
}

// const styles = StyleSheet.create({
//   themeHeader: {
//     margin: 16,
//     fontSize: 16,
//     backgroundColor: 'yellow'
//   }
// })

export default App;
