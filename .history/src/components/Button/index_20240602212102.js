import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
const Button = ({ title }) => {

  const handlePress = () => {
    console.log('button clicked')
  }

  return (
    <Pressable
    hit 
    onPress={handlePress} 
    style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export default Button