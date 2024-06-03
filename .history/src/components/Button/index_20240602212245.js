import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
const Button = ({ title }) => {

  const handlePress = () => {
    console.log('button clicked')
  }

  return (
    <Toucha
    hitStop={20} 
    onPress={handlePress} 
    style={styles.container}>
      <Text>{title}</Text>
    </Toucha>
  );
}

export default Button