/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Chair as BlackChair} from './Chair';
import Table from "./Table"
import Splash from './src/screen/auth/Splash';

const App = ()  => {
  const [ theme, setTheme ] = useState('light')
  return (
    <SafeAreaView>
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
