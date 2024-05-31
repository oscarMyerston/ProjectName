import React, { useState } from "react";
import { Text } from "react-native";

const Chair = () => {
  const (isBig, ) = useState(false)
  return (
    <Text>This is chair</Text>
  )
}

export { Chair };