import React, { useState } from "react";
import { Text } from "react-native";

const Chair = () => {
  const [ isBig, setIsBig ] = useState(false)
  const changeIsBig = () => {
    setIsBig(isBig)
  }

  console.log('is Big: ', isBig)
  return (
    <Text>This is chair</Text>
  )
}

export { Chair };