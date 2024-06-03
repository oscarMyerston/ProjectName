import React from "react";
import { , Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const Button = ({ title, onPress }) => {

  return (
    <TouchableOpacity
    activateOpacity={0.6} 
    onPress={onPress} 
    style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button