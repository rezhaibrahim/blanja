import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';
import {connect} from 'react-redux';

import authAction from '../redux/actions/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Login extends Component {
  state = {
    email: '',
    password: '',
    alertMsg: '',
  };

  login = () => {
    const {email, password} = this.state;
    const data = {email, password};
    this.props.doLogin(data);
  };

  showAlert = () => {
    const {alertMsg} = this.props.auth;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      Alert.alert(alertMsg);
    }
  };

  componentWillUnmount() {
    this.showAlert();
  }

  render() {
    console.log(this.props.auth);
    return (
      <Container>
        <Content>
          <View style={style.margin}>
            <View style={style.title}>
              <Icon
                style={{paddingBottom: 10}}
                name="chevron-left"
                onPress={() => this.props.navigation.navigate('WelcomeAuth')}
                size={25}
                color="black"
              />
              <Text style={style.titleText}>Login</Text>
            </View>
            <Form>
              <Card style={style.inputCard}>
                <CardItem>
                  <Body>
                    <Item style={style.inputWrapper} floatingLabel>
                      <Label style={style.label}>Email</Label>
                      <Input
                        onChangeText={(email) => this.setState({email})}
                        style={style.input}
                      />
                    </Item>
                  </Body>
                </CardItem>
              </Card>
              <Card style={style.inputCard}>
                <CardItem>
                  <Body>
                    <Item style={style.inputWrapper} floatingLabel>
                      <Label style={style.label}>Password</Label>
                      <Input
                        onChangeText={(password) => this.setState({password})}
                        style={style.input}
                        secureTextEntry
                      />
                    </Item>
                  </Body>
                </CardItem>
              </Card>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                style={style.linkWrapper}>
                <Text style={style.forgot}>Forgot your password?</Text>
                <Icon
                  style={style.iconLink}
                  name="long-arrow-right"
                  size={19}
                />
              </TouchableOpacity>
              <View style={style.btnWrapper}>
                <Button onPress={this.login} style={style.btn}>
                  <Text style={style.btnText}>login</Text>
                </Button>
              </View>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  doLogin: authAction.login,
};

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#E5E5E5',
  },
  margin: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    marginTop: 50,
    marginBottom: 60,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 34,
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
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
  forgot: {
    fontSize: 20,
  },
  iconLink: {
    color: '#DB3022',
    marginLeft: 5,
  },
  btnWrapper: {
    flex: 1,
    marginTop: 15,
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
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
