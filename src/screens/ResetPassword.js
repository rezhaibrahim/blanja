import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Form,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';


export default class ResetPassword extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.title}>
          <H1 style={style.titleText}>Reset Password</H1>
        </View>
        <View style={style.info}>
          <Text style={style.infoText}>
            You need to change your password to activate your account
          </Text>
        </View>
        <Form>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>New Password</Label>
                  <Input style={style.input} secureTextEntry />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Confirmation New Password</Label>
                  <Input style={style.input} secureTextEntry />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <View style={style.btnWrapper}>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              style={style.btn}>
              <Text style={style.btnText}>reset password</Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    marginTop: 25,
    marginBottom: 60,
  },
  titleText: {
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 15,
    color: 'red',
  },
  inputCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  input: {
    color: 'black',
    fontSize: 19,
  },
  btnWrapper: {
    flex: 1,
    marginTop: 30,
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: 'white',
  },
});
