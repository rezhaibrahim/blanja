import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button, Card, Form, H3, Input, Item, Label, Picker} from 'native-base';

import userAction from '../redux/actions/user';

export default function ChangeProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [genderId, setGenderId] = useState(0);
  const [dob, setDob] = useState('');

  const {profile} = useSelector((state) => state.user);
  console.log(profile);
  // const {name,email,phone,gender,birthdate} = profile
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(userAction.getDetail(token));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (profile.length) {
      const i = profile[0];
      setName(i.name);
      setEmail(i.email);
      setPhone(i.phone);
      setGenderId(i.gender);
      setDob(i.birthdate);
    }
  }, [profile]);

  const onSubmit = () => {
    const data = {
      name,
      email,
      phone,
      genderId,
      birthdate: dob,
    };
    dispatch(userAction.updateDetail(token, data)) && getData();
  };

  return (
    <ScrollView>
      <View style={style.parent}>
        <H3 style={style.title}>Change Personal Information</H3>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Full name</Label>
            <Input
              onChangeText={(e) => setName(e)}
              style={style.input}
              value={name}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Email</Label>
            <Input
              onChangeText={(e) => setEmail(e)}
              style={style.input}
              value={email}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Phone Number</Label>
            <Input
              onChangeText={(e) => setPhone(e)}
              style={style.input}
              value={phone.toString()}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Text style={style.labelText}>Gender</Text>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={style.gender}
              selectedValue={genderId}
              onValueChange={(itemValue) => setGenderId(itemValue)}>
              <Picker.Item label="Pria" value={1} />
              <Picker.Item label="Wanita" value={2} />
            </Picker>
          </Form>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Date of Birth (yyyy-mm-dd)</Label>
            <Input
              onChangeText={(e) => setDob(e)}
              style={style.input}
              value={dob}
            />
          </Item>
        </Card>
        <Button onPress={() => onSubmit()} style={style.btn} block rounded>
          <Text style={style.btnText}>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputCard: {
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  input: {
    color: 'black',
    fontSize: 19,
    borderBottomWidth: 0,
  },
  labelText: {
    fontSize: 16,
    color: 'grey',
  },
  gender: {
    color: 'black',
  },
  btn: {
    marginVertical: 20,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
