import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Button = ({ title, onPress }) => {

  return (
   <Pressable>
    <Image source={require('../../assets/')}></Image>
   </Pressable>
  );
}

export default Button