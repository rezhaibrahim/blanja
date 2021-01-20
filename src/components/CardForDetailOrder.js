import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import image from '../assets/blanja.png';

const CardOrderDetails = ({item}) => {
  console.log(item.item);
    return (
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={image} />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>{item.item.items_name}</Text>
          <View style={style.itemDetails}>
           
          </View>
          <View style={style.itemDetails}>
            <View style={style.itemUnit}>
              <Text style={style.detailName}>Unit: </Text>
              <Text>{item.item.qty}</Text>
            </View>
    <Text style={style.itemPrice}>Rp.{item.item.price}</Text>
          </View>
        </View>
      </Card>
    );
}
export default CardOrderDetails
const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 5,
  },
  itemImg: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 104,
    height: 104,
  },
  itemDesc: {
    flex: 1,
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemStore: {
    color: 'grey',
  },
  itemDetails: {
    flexDirection: 'row',
  },
  detailName: {
    color: 'grey',
  },
  itemColor: {
    flexDirection: 'row',
  },
  itemSize: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  itemUnit: {
    flex: 1,
    flexDirection: 'row',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
