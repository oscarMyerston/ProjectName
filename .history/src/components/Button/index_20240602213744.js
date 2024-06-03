import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
    activateOpacity={0.6} 
    onPress={handlePress} 
    style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button