import React from 'react';
import {TextInput, View} from 'react-native';
import { styles } from '../AuthHeader/styles';

const Input = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}></TextInput>
      </View>
    </View>
  );
};
