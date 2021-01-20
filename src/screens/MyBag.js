/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import {Button, H1} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import List from '../components/CardForMyBag';

import mybagAction from '../redux/actions/mybag';

const MyBag = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {mybag} = useSelector((state) => state.mybag);
  useEffect(() => {
    dispatch(mybagAction.getMyBag(token));
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [mybag]);
  // console.log(mybag.length);
  let price;
  if (mybag.length === 1) {
    price = mybag.map((item) => item.price);
  } else {
    price = mybag.map(
      (item) => (item.price + item.price) * (item.qty + item.qty),
    );
  }
  // console.log(price);

  let total = parseInt(price);
  // console.log(total.length);
  // let formatRp = total.toString().split('').reverse().join('');
  // let slice = formatRp.match(/\d{1,3}/g);
  // let combine	= slice.join('.').split('').reverse().join('');
  // console.log(total);
  
  const isCheckout = () =>{
    dispatch(mybagAction.checkout(token))
    navigation.navigate('Checkout')
  }
  return (
    <>
      <View style={style.parent}>
        <View style={style.title}>
          <Text style={style.titleText}>My Bag</Text>
        </View>
        <FlatList
          data={mybag}
          renderItem={(items) => <List items={items} navigation={navigation} />}
        />
      </View>
      <View style={style.checkoutWrapper}>
        <View style={style.text}>
          <Text style={style.total}>Total amount :</Text>
          <Text style={style.price}>Rp.{total}</Text>
        </View>
        <Button
          onPress={() => isCheckout()}
          style={style.btn}
          block>
          <Text style={style.btnText}>check out</Text>
        </Button>
      </View>
    </>
  );
};
export default MyBag;

const style = StyleSheet.create({
  parent: {
    margin: 13,
    flex: 1,
  },
  title: {
    marginBottom: 30,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  listWrapper: {
    flex: 1,
  },
  checkoutWrapper: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: 'grey',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
  },
});
