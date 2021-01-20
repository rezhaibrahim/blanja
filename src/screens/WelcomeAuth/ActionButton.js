import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {Button} from '../../components';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={style.btnParent}>
      <Text style={style.btnText}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const style = StyleSheet.create({
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
});

export default ActionButton;
