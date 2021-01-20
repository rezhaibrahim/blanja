import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import pict from '../assets/bags.png';
import {Button} from 'native-base';

export default class Success extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.content}>
          <Image source={pict} />
          <Text style={style.title}>Success!</Text>
          <Text style={style.text}>Your order will be delivered soon.</Text>
          <Text style={style.text}>Thank you for choosing our app!</Text>
        </View>
        <View style={style.btnWrapper}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            style={style.btn}
            block>
            <Text style={style.btnText}>Continue Shopping</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  btnWrapper: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
