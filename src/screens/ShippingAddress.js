import React, {useEffect,useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Card} from 'native-base';
import { useDispatch,useSelector } from "react-redux";
import addressAction from '../redux/actions/address'

const Render = ({item,navigation}) => {
  const {id} = item.item
  return(
    <Card style={style.parentCard}>
            <View style={style.btnText}>
              <View style={style.header}>
                <Text style={style.name}>{item.item.name}</Text>
                <TouchableOpacity
                  style={style.change}
                  transparent
                  onPress={() => navigation.navigate('EditAddress',id)}>
                  <Text style={{color:'red',margin:10}}>Change</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => console.log('add')} transparent>
  <Text style={{marginLeft:10}}>{item.item.address}</Text>
              </TouchableOpacity>
            </View>
          </Card>
  )
}

const ShippingAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.address)
  console.log(data);
  const {token} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(addressAction.getAddress(token))
  }, [])
  useEffect(() => {
  }, [data])
  return (
    <>
      <ScrollView>
        <View style={style.parent}>
          <Card style={style.searchbar}>
            <Icon style={style.searchIcon} name="search" />
            <TextInput placeholder="Search" />
          </Card>
          <View style={style.title}>
            <Text style={style.titleText}>Shipping Address</Text>
          </View>
          <FlatList
          data={data}
          renderItem={(item)=> (<Render item={item} navigation={navigation} />)}
          />
          
        </View>
      </ScrollView>
      <View style={style.btnWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddAddress')}
          style={style.btn}>
          <Text style={style.btnText}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ShippingAddress;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 5,
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnWrapper: {
    backgroundColor: 'white',
    padding: 20,
  },
  btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textTransform: 'uppercase',
  },
  parentCard: {
    borderRadius: 6,
    marginBottom: 15,
    height:100
  },
  selected: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  btnCard: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnTextCard: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    margin: 10,
    fontWeight: 'bold',
    fontSize:18,
  },
  change: {
    height: 20,
  },
  changeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
