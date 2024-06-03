import React from "react";
import { Text, Image, View } from "react-native"
import { styles } from './styles'
import Button from "../../../components/Button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Splash = () => {
  return [
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <Text style={styles.title}>You'll Find</Text>
      <Text style={[styles.title, styles.innetTitle]} >All you need </Text>
      <Text style={styles.title}>Here!</Text>

      <Button title="Sign Up"/>

      <Pressable hitSlop={20}>

      </Pressable>

    </View>,
  ];
  
}

export default Splash