import React from 'react';
import {TextInput, View, Text} from 'react-native';
import { styles } from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export const Input = ({ label, placeholder, isPassword }) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder}style={styles.input}></TextInput>
        <Pressable>
          <Image>/Image>
        </Pressable>
      </View>
    </View>
  );
};