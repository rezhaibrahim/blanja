/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, StyleSheet} from 'react-native';
import {H1, H3, Left, List, ListItem, Right, Thumbnail} from 'native-base';
import {API_URL} from '@env';
import avatar from '../assets/avatar.png';
import userAction from '../redux/actions/user';
import authAction from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const MyProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile} = useSelector((state) => state.user);
  // console.log(profile[0]);
  // const {name,email,phone,gender,profile_picture} = profile[0]
  const {token} = useSelector((state) => state.auth);
  // const picture =API_URL + profile_picture.slice(1)
  // console.log(picture);
  const isSignOut = () => {
    dispatch(authAction.logout());
  };
  const getData = () => {
    dispatch(userAction.getDetail(token));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={style.parent}>
      <View style={style.content}>
        <View style={style.title}>
          <H1 style={style.titleText}>My Profile</H1>
        </View>

        <View style={style.profileWrapper}>
          {profile.map((user) => {
            return (
              <>
                <Thumbnail
                  large
                  source={
                    user.profile_picture !== null
                      ? {uri: API_URL + user.profile_picture.slice(1)}
                      : avatar
                  }
                />
                <View style={style.profile}>
                  <H3 style={style.profileName}>{user.name}</H3>
                  <Text style={style.profileEmail}>{user.email}</Text>
                </View>
              </>
            );
          })}
        </View>
      </View>
      <View style={style.listWrapper}>
        <List>
          <ListItem onPress={() => navigation.navigate('MyOrder')} button>
            <Left style={style.listLeft}>
              <Text style={style.listTitle}>My orders</Text>
              <Text style={style.listDesc}>Already have orders</Text>
            </Left>
            <Right>
              <Icon style={style.listIcon} name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem
            onPress={() => navigation.navigate('ShippingAddress')}
            button>
            <Left style={style.listLeft}>
              <Text style={style.listTitle}>Shipping Addresses</Text>
              <Text style={style.listDesc}>Address</Text>
            </Left>
            <Right>
              <Icon style={style.listIcon} name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Settings')} button>
            <Left style={style.listLeft}>
              <Text style={style.listTitle}>Settings</Text>
              <Text style={style.listDesc}>Notification, Password</Text>
            </Left>
            <Right>
              <Icon style={style.listIcon} name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem onPress={() => isSignOut()} button>
            <Left style={style.listLeft}>
              <Text style={[style.listTitle, style.logout]}>Logout</Text>
            </Left>
            <Right>
              <Icon
                style={[style.listIcon, style.logout]}
                name="chevron-right"
              />
            </Right>
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default MyProfile;

const style = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    margin: 13,
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  profile: {
    marginLeft: 15,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'grey',
  },
  listWrapper: {
    marginTop: 30,
  },
  listLeft: {
    flexDirection: 'column',
  },
  listTitle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  listDesc: {
    marginTop: 8,
    fontSize: 13,
    color: 'grey',
  },
  listIcon: {
    color: 'grey',
  },
  logout: {
    color: '#DB3022',
  },
});
