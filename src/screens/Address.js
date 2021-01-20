import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert, ScrollView, Text, View, StyleSheet} from 'react-native';
import {Button, Card, Input, Item, Label} from 'native-base';
import addressAction from '../redux/actions/address';

class AddAddress extends Component {
  state = {
    name: '',
    fullname: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    alertMsg: '',
  };

  onSubmit = async () => {
    const {name, fullname, phone, address, city, postalCode} = this.state;
    const data = {
      name,
      recipientName: fullname,
      recipientPhone: phone,
      address,
      postalCode,
      city,
    };
    console.log(data);
    await this.props.addNew(this.props.token, data);
    this.showAlert();
  };

  showAlert = () => {
    const {alertMsg} = this.props.address;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      Alert.alert(alertMsg);
    }
    this.props.getData(this.props.token);
  };

  render() {
    return (
      <ScrollView>
        <View style={style.parent}>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>Save as</Label>
                <Input
                  onChangeText={(name) => this.setState({name})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>Recipient's Name</Label>
                <Input
                  onChangeText={(fullname) => this.setState({fullname})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>Recipient's Phone Number</Label>
                <Input
                  onChangeText={(phone) => this.setState({phone})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>Address</Label>
                <Input
                  onChangeText={(address) => this.setState({address})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>City</Label>
                <Input
                  onChangeText={(city) => this.setState({city})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <View style={style.cardWrapper}>
            <Card style={style.card}>
              <Item style={style.item} floatingLabel>
                <Label style={style.label}>Zip Code (Postal Code)</Label>
                <Input
                  onChangeText={(postalCode) => this.setState({postalCode})}
                  style={style.input}
                />
              </Item>
            </Card>
          </View>
          <Button onPress={this.onSubmit} style={style.btn} block>
            <Text style={style.btnText}>Save Address</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  address: state.address,
});

const mapDispatchToProps = {
  addNew: addressAction.addAddress,
  getData: addressAction.getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);

const style = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 25,
  },
  cardWrapper: {
    marginVertical: 5,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  item: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 15,
  },
  input: {
    fontSize: 15,
  },
  btn: {
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
