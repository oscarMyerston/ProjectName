import React from "react";
import { Text, Image, View } from "react-native"
import { styles } from './styles'

const Splash = () => {
  return [
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <Text style={styles.title}>You'll Find <Text style={styles.innetTitle} >All you need </Text>Here!</Text>
    </View>,
  ];
  
}

export default Splash