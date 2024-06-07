import React from 'react';
import { View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import { Input } from '../../../components/Input';

const Signup = () => {
  return [
    <View style={styles.container}>
      <AuthHeader title="Sign Up"/>
      <Input label= "Name" placeholder="John Doe"/>
      <Input label= "E-mail" placeholder="example@gmail.com"/>
      <Input label= "Password" placeholder="example@gmail.com"/>

    </View>,
  ];
};

export default Signup;