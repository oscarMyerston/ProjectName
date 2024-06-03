import React from "react";
import { Pressable } from "react-native";

const Button = ({ title }) => {
  return (
    <Pressable>

      <Text>{ title }</Text>
    </Pressable>
  )
}