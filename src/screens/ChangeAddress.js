import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View,StyleSheet} from 'react-native';
import {Button, Card, Textarea} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import * as Yup from 'yup';
import addressAction from '../redux/actions/address';

export default function EditProfile(route) {
  console.log("route",route);
  const [name, setName] = useState('');
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const {token} = useSelector((state) => state.auth);
  const {detail} = useSelector(state => state.address)
  console.log(detail);
  const id = route.route.params
  console.log(route.route.params);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(addressAction.getDetail(token,id))
  }, []);
  useEffect(() => {
    if (detail.length) {
      const i = detail[0];
      setName(i.name);
      setFullname(i.recipient_name);
      setPhone(i.recipient_phone);
      setAddress(i.address);
      setPostalCode(i.postal_code);
      setCity(i.city)
    }
  }, [detail]);
  const edit = () => {
    const data ={
      name,
      fullname,
      address,
      city,
      postalCode,
      phone
    }
    console.log(data);
    dispatch(addressAction.updateAddress(token,id,data))
  }
  return (
    <>
      <ScrollView>
        <View style={style.parent}>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>
                Save address as (ex: home address, office address)
              </Text>
              <TextInput
                onChangeText={(e) => setName(e)}
                style={style.input}
                value={name}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Recipient's Name</Text>
              <TextInput
                onChangeText={(e) => setFullname(e)}
                style={style.input}
                value={fullname}
              />
            </View>
          </Card>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Address</Text>
              <Textarea
                onChangeText={(e) => setAddress(e)}
                rowSpan={5}
                style={style.input}
                value={address}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>City or Subdistrict</Text>
              <TextInput
                onChangeText={(e) => setCity(e)}
                style={style.input}
                value={city}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Postal Code</Text>
              <TextInput
                onChangeText={(e) => setPostalCode(e)}
                style={style.input}
                value={postalCode.toString()}
              />
            </View>
          </Card>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Recipient's Phone Number</Text>
              <TextInput
                onChangeText={(e) => setPhone(e)}
                style={style.input}
                value={phone.toString()}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
      <View style={style.btnWrapper}>
        <Button onPress={() => edit()} style={style.btn} block>
          <Text style={style.btnText}>save address</Text>
        </Button>
      </View>
    </>
  );
}


const style = StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 25,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginVertical: 40,
  },
  inputWrapper: {
    marginVertical: 5,
  },
  label: {
    fontSize: 12,
    color: 'grey',
  },
  input: {
    padding: 0,
    borderBottomWidth: 1,
  },
  btn: {
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  btnWrapper: {
    marginHorizontal: 25,
    marginBottom: 15,
  },
});
