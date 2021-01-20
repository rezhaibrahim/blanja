import React, {useEffect,useState} from 'react';
import {Image, Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import {Button, Card, CheckBox} from 'native-base';
import cartAction from '../redux/actions/mybag';
import { useDispatch,useSelector} from 'react-redux'

import mastercard from '../assets/mastercard.png';
import pos from '../assets/pos-indo.png';
import gopay from '../assets/gopay.png';

const Render = () => {

  let Payment= [
    {
      img: mastercard,
      name: 'MasterCard',
      checked: 'mastercard',
    },
    {
      img: pos,
      name: 'Pos Indonesia',
      checked: 'pos',
    },
    {
      img: gopay,
      name: 'Gopay',
      checked: 'gopay',
    },
  ]

  const [check, setcheck] = useState(false)
  const selected = () => {
    setcheck((prevState) => ({check: !prevState.check}));
  }
  
    return(
      Payment.map((i, o) => (
        <View key={o} style={style.paymentWrapper}>
          <Card style={style.payCard}>
            <Image source={i.img} />
          </Card>
          <View style={style.payName}>
            <Text>{i.name}</Text>
            <CheckBox
              onPress={() => selected()}
              checked={check}
              color="#DB3022"
            />
          </View>
        </View>
      ))
    )
  }


 const Checkout = ({navigation}) =>{
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth)
  const {checkoutAddress} = useSelector(state => state.mybag)
  const {checkoutResults} = useSelector(state => state.mybag)
  console.log(checkoutResults);
  const [name, setname] = useState('')
  const [address,setaddress] = useState('')
  
  useEffect(() => {
    
    dispatch(cartAction.getMyBag(token))
  }, [])
  useEffect(() => {
    
  }, [checkoutAddress,checkoutResults])
  
  const submit = () => {
    
    dispatch(cartAction.reset())
    dispatch(cartAction.clear())
    navigation.navigate('Success')
  }

    return (
      <>
        <View style={style.parent}>
          <View style={style.title}>
            <Text style={style.titleText}>Shipping address</Text>
          </View>
          <Card style={style.card}>
            <View style={style.header}>
              <Text style={style.headerName}>Name</Text>
              <TouchableOpacity>
                <Text style={style.headerChange}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text>Address</Text>
          </Card>
          <View style={style.title}>
            <Text style={style.titleText}>Payment</Text>
          </View>
          <Render />

        </View>
        <View style={style.total}>
          <View style={style.list}>
            <Text style={style.listName}>Order:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Delivery:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Summary:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <Button
            onPress={() => submit()}
            style={style.btn}
            block>
            <Text style={style.btnText}>submit order</Text>
          </Button>
        </View>
      </>
    );
}
export default  Checkout 

const style = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 13,
  },
  title: {
    marginBottom: 10,
    marginTop: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerName: {
    fontWeight: 'bold',
  },
  headerChange: {
    fontWeight: 'bold',
    color: '#DB3022',
  },
  paymentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payCard: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  payName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 13,
  },
  total: {
    paddingHorizontal: 13,
    paddingTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listName: {
    color: 'grey',
    fontSize: 15,
  },
  listValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btnText: {
    fontSize: 15,
    color: 'white',
    textTransform: 'uppercase',
  },
});
