import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'native-base';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CardAddress extends Component {
  state = {
    id: 10,
  };
  render() {
    return (
      <Card style={style.parent}>
        <View
          style={[
            style.btnText,
            this.props.pri === 1 ? style.selected : style.btn,
          ]}>
          <View style={style.header}>
            <Text style={style.name}>{this.props.name}</Text>
            <TouchableOpacity
              style={style.change}
              transparent
              onPress={() => this.props.navigation.navigate('EditAddress')}>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => console.log(this.state.id)}
            transparent>
            <Text>{this.props.address}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    borderRadius: 6,
    marginBottom: 15,
  },
  selected: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  btn: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnText: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  change: {
    height: 20,
  },
  changeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
