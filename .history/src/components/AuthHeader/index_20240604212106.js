import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Button = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image style={styles.Image} source={require('../../assets/auth_back.png')}></Image>
      </Pressable>
      <Text style={styles}>{title}</Text>
    </View>
  );
};

export default Button;
