import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import {StarRatings} from './atoms';

import image from '../assets/blanja.png';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';
import itemAction from '../redux/actions/item';
import {TouchableOpacity} from 'react-native-gesture-handler';
import categoryAction from '../redux/actions/category';

const CardCategory = ({item, route, navigation}) => {
  console.log(route);
  const id = route.params;
  const dispatch = useDispatch();
  const {
    itemName,
    price,
    description,
    rating,
    conditions,
    picture,
    category,
  } = item.item;
  const image = API_URL + picture.slice(7);
  // console.log( item.item);

  let formatRp = price.toString().split('').reverse().join('');
  let slice = formatRp.match(/\d{1,3}/g);
  let combine = slice.join('.').split('').reverse().join('');

  // const toDetail = () => {
  //   navigation.navigate('ProductDetail',id);
  //   console.log("item id",id);
  //   dispatch(itemAction.getDetailItem(id))
  // };
  const {categoryDetail} = useSelector((state) => state.category);
  // console.log(categoryDetail[0].name);
  useEffect(() => {
    dispatch(categoryAction.getDetailCategory(id));
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [categoryDetail]);
  return (
    <TouchableOpacity>
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={{uri: image}} />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>{itemName}</Text>
          <Text style={style.itemStore}>{conditions}</Text>
          <View style={style.itemRatings}>
            <StarRatings q={rating} />
          </View>
          <Text style={style.itemPrice}>Rp.{combine}</Text>
        </View>
      </Card>
    </TouchableOpacity>
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 104,
    height: 124,
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
  itemRatings: {
    flexDirection: 'row',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
