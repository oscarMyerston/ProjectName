import React from 'react';
import {TextInput, View, Text} from 'react-native';
import { styles } from './styles';

export const Input = ({ label, placeholder, isPassword}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder}style={styles.input}></TextInput>
      </View>
    </View>
  );
};