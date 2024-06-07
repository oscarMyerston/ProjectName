import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Button = ({ title, onBackPress }) => {

  return (
    <View>
      <Pressable >
        <Image source={require('../../assets/auth_back.png')}></Image>
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
}

export default Button