import React, { useState } from "react";
import { Text } from "react-native";

const Chair = () => {
  const [ isBig, isUseBig ] = useState(false)

  console.log('is Big: ', isBig)
  return (
    <Text>This is chair</Text>
  )
}

export { Chair };