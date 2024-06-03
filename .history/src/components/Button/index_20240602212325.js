import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
const Button = ({ title }) => {

  const handlePress = () => {
    console.log('button clicked')
  }

  return (
    <TouchableOpacity
    activateOpacity={20} 
    onPress={handlePress} 
    style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button