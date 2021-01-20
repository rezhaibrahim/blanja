/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Card,
  Container,
  Content,
  H1,
  H3,
  Input,
  Item,
  Label,
  Left,
  List,
  Right,
  Switch,
} from 'native-base';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import userAction from '../redux/actions/user';

const renderContent = () => (
  <ScrollView>
    <View style={style.bottomSheet}>
      <Text style={style.bottomTitle}>Password Change</Text>
      <Card style={style.inputCard}>
        <Item style={style.inputWrapper} floatingLabel>
          <Label style={style.label}>Old Password</Label>
          <Input onChangeText={(e) => setOld(e)} style={style.input} />
        </Item>
      </Card>
      <TouchableOpacity style={style.forgotLink}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <Card style={style.inputCard}>
        <Item style={style.inputWrapper} floatingLabel>
          <Label style={style.label}>New Password</Label>
          <Input onChangeText={(e) => setNew(e)} style={style.input} />
        </Item>
      </Card>
      <Card style={style.inputCard}>
        <Item style={style.inputWrapper} floatingLabel>
          <Label style={style.label}>Repeat New Password</Label>
          <Input onChangeText={(e) => setConfirm(e)} style={style.input} />
        </Item>
      </Card>
      <Button onPress={() => onSubmit()} style={style.btn} rounded block>
        <Text style={style.btnText}>Save Password</Text>
      </Button>
    </View>
  </ScrollView>
);

export default function Settings(props) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [old, setOld] = useState('');
  const [newPass, setNew] = useState('');
  const [confrim, setConfirm] = useState('');

  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.auth);
  const {profile} = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log(data.length);
  //   if (data.length) {
  //     const i = data[0];
  //     setName(i.name);
  //     setDob(i.birthdate);
  //   }
  // }, [data]);

  const onSubmit = () => {
    console.log({old, newPass, confrim});
    const body = {
      oldPassword: old,
      newPassword: newPass,
      confrimPassword: confrim,
    };
    dispatch(userAction.updatePassword(token, body));
    // showAlert();
  };

  // const showAlert = () => {
  //   if (alertMsg !== '') {
  //     Alert.alert(alertMsg);
  //   }
  // };

  // useEffect(() => {
  //   showAlert();
  // }, []);
  const getData = () => {
    dispatch(userAction.getDetail(token));
  };

  useEffect(() => {
    getData();
  }, []);

  const sheetRef = React.createRef();

  return (
    <>
      <Container>
        <Content>
          <View style={style.parent}>
            <H1 style={style.title}>Settings</H1>
            <View style={style.header}>
              <Text style={style.subTitle}>Personal Information</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ChangeProfile')}>
                <Text>Change</Text>
              </TouchableOpacity>
            </View>
            {profile.map((user) => {
              return (
                <>
                  <Card style={style.inputCard}>
                    <Item style={style.inputWrapper} floatingLabel>
                      <Label style={style.label}>Full name</Label>
                      <Input disabled style={style.input} value={user.name} />
                    </Item>
                  </Card>
                  <Card style={style.inputCard}>
                    <Item style={style.inputWrapper} floatingLabel>
                      <Label style={style.label}>Date of Birth</Label>
                      <Input
                        disabled
                        style={style.input}
                        value={user.birthdate}
                      />
                    </Item>
                  </Card>
                </>
              );
            })}
            <View style={style.header}>
              <Text style={style.subTitle}>Password</Text>
              <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Text>Change</Text>
              </TouchableOpacity>
            </View>
            <Card style={style.inputCard}>
              <Item style={style.inputWrapper} floatingLabel>
                <Label style={style.label}>Password</Label>
                <Input style={style.input} secureTextEntry />
              </Item>
            </Card>
            <Text style={style.subTitle}>Notifications</Text>
            <List style={style.notif}>
              <Left>
                <Text>Sales</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </List>
            <List style={style.notif}>
              <Left>
                <Text>New arrivals</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </List>
            <List style={style.notif}>
              <Left>
                <Text>Delivery status changes</Text>
              </Left>
              <Right>
                <Switch value={false} />
              </Right>
            </List>
          </View>
        </Content>
      </Container>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputCard: {
    justifyContent: 'center',
    alignItems: 'center',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notif: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    height: 500,
  },
  bottomTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginVertical: 3,
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
