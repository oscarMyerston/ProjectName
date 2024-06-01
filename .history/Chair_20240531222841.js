import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const Chair = (props) => {
 const { theme } = props // object destructuring
  const [ isBig, setIsBig ] = useState(false)

  const changeState = () => {
    setIsBig(currentState => !currentState)
  }

  // useEffect(() => {
  //   console.log('Inside useEffect')
  // }, [isBig])

  console.log('is Big: ', isBig)
  return (
    <Text
    style={{ fontSize: isBig ? 24 : 14
      color: theme === 'dark'  ? 'grey' : 'purple' }}
    onPress={changeState} 
    >This is chair</Text>
  )
}

export { Chair };