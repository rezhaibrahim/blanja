import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import under from '../assets/under.png';

const Under = () => {
  return (
    <>
      <View style={style.parent}>
        <Image style={style.logo} source={under} />
      </View>
      <View style={style.parent2}>
        <Text style={style.text}>Comming Soon !!!</Text>
      </View>
    </>
  );
};

export default Under;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:290
  },
  parent2: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:150
  },
  logo: {
    width: 80,
    resizeMode: 'contain',
  },
  text: {
    color: 'gray',
  },
});
