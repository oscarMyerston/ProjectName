import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './style';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image style={styles.Image} source={require('../../assets/auth_back.png')}></Image>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
