import React from 'react';
import { View} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../Signup'
const Signup = () => {
  return [
    <View style={styles.container}>
      <AuthHeader title="Sign Up"/>
    </View>,
  ];
};

export default Signup;