import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import {API_URL} from '@env';
import image from '../assets/blanja.png';
import cartAction from '../redux/actions/mybag'
import { useSelector,useDispatch } from 'react-redux'
const  CardMyBooking = ({items,navigation}) => {
  // console.log(item.item);
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)
  const {id,item,qty,price,picture}= items.item
  const image =API_URL + picture.slice(7)
  const {isEdit} = useSelector((state) => state.mybag);
  const {mybag} = useSelector((state) => state.mybag);
  
  const updateQuantity = (qty) => {
    const data = {qty};
    dispatch(cartAction.editQty(token,id, data));
    dispatch(cartAction.getMyBag(token));
    if (isEdit === true) {
      console.log(isEdit);
      dispatch(cartAction.clear());
      
    }
  }
    console.log('state',isEdit);
  useEffect(() => {
    if (isEdit === true) {
      dispatch(cartAction.clear());
      dispatch(cartAction.getMyBag(token));
    }
    dispatch(cartAction.clear());
  },[]);

  
    return (
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={{uri:image}} />
        <View style={style.itemDesc}>
    <Text style={style.itemName}>{item}</Text>
          
          <View style={style.itemDetails}>
            <View style={style.itemUnit}>
              <TouchableOpacity
              disabled={qty === 1 ? true : false}
               onPress={() =>
                updateQuantity(qty - 1,id)
              }
                
                style={style.btn}>
                <Icon style={style.icon} name="minus" />
              </TouchableOpacity>
              <Text style={style.qty}>{qty}</Text>
              <TouchableOpacity
               onPress={() =>
                updateQuantity(qty + 1,id)
              }
                style={style.btn}>
                <Icon style={style.icon} name="plus" />
              </TouchableOpacity>
            </View>
    <Text style={style.itemPrice}>Rp.{qty*price}</Text>
          </View>
        </View>
      </Card>
    );
}
export default  CardMyBooking
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
    alignItems: 'center',
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
    alignItems: 'center',
    marginTop: 5,
  },
  btn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty: {
    marginHorizontal: 10,
  },
  icon: {
    fontSize: 15,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
