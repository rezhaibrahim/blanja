import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import splashImg from '../assets/shopping-bag.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });
  return (
    <View style={style.parent}>
      <Image style={style.logo} source={splashImg} />
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#DB3022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    resizeMode: 'contain',
  },
});
