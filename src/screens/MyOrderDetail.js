import React, {useEffect,useState} from 'react';
import {Text, View, StyleSheet,FlatList} from 'react-native';
import {Button} from 'native-base';

import List from '../components/CardForDetailOrder';
import { useDispatch,useSelector } from "react-redux";
import addressAction from '../redux/actions/address';
import orderAction from '../redux/actions/order'
import dateFormat from 'dateformat';
const OrderDetails = ({route}) => {
  // console.log(route);
  const id = route.params
  // console.log("cek",route.params);
  const dispatch = useDispatch();
  const [no, setId] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [total, setTotal] = useState('');
  const [delivery, setDelevery] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');
  const {token} = useSelector(state => state.auth)
  const tgl = dateFormat(date, 'dd-mm-yyyy');
  const {detail} = useSelector(state => state.order)
  console.log("cek",detail);

  useEffect(() => {
    dispatch(orderAction.getDetailOrder(token,id))
  }, [])
  useEffect(() => {
    if (detail.length) {
      const i = detail[0];
      setId(i.id);
      setTransactionId(i.transaction_id);
      setName(i.items_name);
      setPrice(i.price);
      setQty(i.qty);
      setTotal(i.total_price)
      setDelevery(i.delivery_fee)
      setSummary(i.summary)
      setDate(i.created_at)
    }
  }, [dispatch])

  // console.log(route);
    return (
      <View style={style.bg}>
        <View style={style.parent}>
          <View style={style.orderDesc}>
    <Text style={style.orderNumb}>Order No.{no}</Text>
            <Text style={style.orderDate}>{tgl}</Text>
          </View>
          <View style={style.track}>
            <View style={style.trackNumb}>
              <Text style={style.trackName}>Tracking Number: </Text>
    <Text style={style.trackNo}>{transactionId}</Text>
            </View>
            {/* <Text style={style.success}>Status</Text> */}
          </View>
            <Text style={style.danger}>Status</Text>
          <FlatList 
          data={detail}
          renderItem={(item) => (<List item={item} />)}
          />
          <View style={style.info}>
            <Text style={style.title}>Order Information</Text>
            
            <View style={style.infoList}>
              <Text style={style.name}>Payment method:</Text>
              <Text style={style.value}>{price}</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Delivery method:</Text>
              <Text style={style.value}>{delivery}</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>total price item:</Text>
              <Text style={style.value}>{total}</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Total Amount:</Text>
              <Text style={style.value}>{summary}</Text>
            </View>
          </View>
          <View style={style.btnWrapper}>
            <Button style={style.btn1} block transparent>
              <Text style={style.btn1Text}>Reorder</Text>
            </Button>
            <Button style={style.btn2} block>
              <Text style={style.btn2Text}>Leave feedback</Text>
            </Button>
          </View>
        </View>
      </View>
    );
}
export default  OrderDetails
const style = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  parent: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 20,
  },
  orderDesc: {
    flexDirection: 'row',
  },
  orderNumb: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  orderDate: {
    color: 'grey',
  },
  track: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  trackNumb: {
    flex: 1,
    flexDirection: 'row',
  },
  trackName: {
    color: 'grey',
  },
  trackNo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  success: {
    color: 'green',
  },
  danger: {
    color: 'red',
    marginLeft:250
  },
  info: {
    marginTop: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: 15,
  },
  infoList: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  name: {
    width: '35%',
    marginRight: 3,
    fontSize: 15,
    color: 'grey',
  },
  value: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btn1: {
    width: '48%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
  },
  btn1Text: {
    fontSize: 16,
  },
  btn2: {
    width: '48%',
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btn2Text: {
    fontSize: 16,
    color: 'white',
  },
});
