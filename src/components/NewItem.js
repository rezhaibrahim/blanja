import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Card} from 'native-base';
import {API_URL} from '@env';
import {StarRatings} from './atoms';
import {useDispatch, useSelector} from 'react-redux';

import itemAction from '../redux/actions/item';

export default function NewItem({item, navigation}) {
  // console.log("item",item);
  const dispatch = useDispatch();
  const {
    id,
    itemName,
    price,
    description,
    rating,
    conditions,
    picture,
    category,
  } = item.item;
  const image = API_URL + picture.slice(7);
  // console.log(id);

  let formatRp = price.toString().split('').reverse().join('');
  let slice = formatRp.match(/\d{1,3}/g);
  let combine = slice.join('.').split('').reverse().join('');

  const toDetail = () => {
    navigation.navigate('ProductDetail', id);
    console.log('item id', id);
    dispatch(itemAction.getDetailItem(id));
  };

  return (
    <TouchableOpacity onPress={() => toDetail()}>
      <Card style={style.card}>
        <Image style={style.img} square large source={{uri: image}} />
        <Text style={style.badge}>{conditions}</Text>
        <View style={style.itemDesc}>
          <StarRatings q={rating} />
          <Text style={style.itemStore}>{category}</Text>
          <Text style={style.itemName}>{itemName}</Text>
          <Text style={style.itemPrice}>Rp.{combine}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    width: 150,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
    textTransform: 'uppercase',
    top: 5,
    left: 5,
  },
  itemDesc: {
    padding: 10,
  },
  itemStore: {
    color: 'grey',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: 'red',
  },
});
