import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import {API_URL} from '@env';
import image from '../assets/blanja.png';

const CardCategory = ({item, navigation}) => {
  // console.log("item",item.item);
  const {id, name, image} = item.item;
  const picture = API_URL + image.slice(1);

  const toDetail = () => {
    navigation.navigate('CategoryDetail', id);
    console.log('item id', id);
    // dispatch(itemAction.getDetailItem(id))
  };
  console.log(picture);
  return (
    <Card style={style.card}>
      <View style={style.itemDesc}>
        <TouchableOpacity onPress={() => toDetail()}>
          <Text style={style.itemName}>{name}</Text>
        </TouchableOpacity>
      </View>
      <Image style={style.itemImg} square source={{uri: picture}} />
    </Card>
  );
};
export default CardCategory;

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
  },
  itemImg: {
    borderRadius: 10,
    width: 150,
    height: 154,
  },
  itemDesc: {
    flex: 1,
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 50,
    paddingLeft: 20,
  },
  itemStore: {
    color: 'grey',
  },
  itemRatings: {
    flexDirection: 'row',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
