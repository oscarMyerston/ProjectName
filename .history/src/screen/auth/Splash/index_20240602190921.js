import React from "react";
import {Text, Image} from "react-native"
import { styles } from './styles'
const Splash = () => {
  return (
    <Image style={styles.image} source={require('../../../assets/splash_image.png')}/>

    <Text>You'll Find All you need Here!</Text>
  
  
}

export default Splash