import React from 'react';
import { View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import { Input } from '../../../components/Input';

const Signup = () => {
  return [
    <View style={styles.container}>
      <AuthHeader title="Sign Up"/>
      <Input label= "Email" placeholder="example"/>
    </View>,
  ];
};

export default Signup;