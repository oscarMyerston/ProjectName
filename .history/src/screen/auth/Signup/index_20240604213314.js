import React from 'react';
import { View} from 'react-native';
import {styles} from './styles';

const Signup = () => {
  return [
    <View style={styles.container}>
      <AuthHeader title="Sign"/>
    </View>,
  ];
};

export default Signup;