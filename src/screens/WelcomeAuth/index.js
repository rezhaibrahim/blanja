import React from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../../assets/logo.png';
import {Text, Container} from 'native-base';
import ActionButton from './ActionButton';

// If you don't have an account, please register
const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <>
      <Container style={style.parent}>
        <Image source={logo} />
        <Text style={style.textLogo}>welcome, happy shopping</Text>
      </Container>
      <Container style={style.parent}>
        <ActionButton
          desc="if you already have an account please login"
          title="Login"
          onPress={() => handleGoTo('Login')}
        />
        <ActionButton
          desc="If you don't have an account, please register first"
          title="Register"
          onPress={() => handleGoTo('Register')}
        />
      </Container>
    </>
  );
};

export default WelcomeAuth;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
  },
  textLogo: {
    fontSize: 27,
    color: '#DB3022',
  },
  btnParent: {
    marginBottom: 43,
    maxWidth: 225,
  },
  btnText: {
    fontSize: 12,
    color: '#7e7e7e',
    textAlign: 'center',
    marginBottom: 5,
    paddingHorizontal: '15%',
  },
  btnTouch: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    paddingVertical: 13,
  },
  textTouch: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
