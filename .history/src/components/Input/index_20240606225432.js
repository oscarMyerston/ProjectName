import React, {useState} from 'react';
import {TextInput, View, Text, Image} from 'react-native';
import { styles } from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export const Input = ({ label, placeholder, isPassword }) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder}style={styles.input}></TextInput>
        <Pressable onPress={onEyePress}>
          <Image source={require('../../assets/eye.png')}/>
        </Pressable>
      </View>
    </View>
  );
};