import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./style";
const Button = ({ title }) => {

  const handlePress = () => {
    console.log('button clicked')
  }

  return (
    <Tou
    hitStop={20} 
    onPress={handlePress} 
    style={styles.container}>
      <Text>{title}</Text>
    </Tou>
  );
}

export default Button