/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import New from '../components/NewItem';
import Popular from '../components/PopularItem';
import header from '../assets/Image.png';
import img from '../assets/blanja.png';

import itemAction from '../redux/actions/item';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {itemNew} = useSelector((state) => state.item);
  const {itemPopular} = useSelector((state) => state.item);
  const {pageInfo} = useSelector((state) => state.item);
  const [viewNew, setViewNew] = useState(false);
  const [viewPopular, setViewPopular] = useState(false);
  // console.log(viewNew);
  useEffect(() => {
    dispatch(itemAction.getNewItem());
    dispatch(itemAction.getPopularItem());
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [itemNew, itemPopular]);

  const viewAllNew = () => {
    setViewNew((prevState) => ({viewNew: !prevState.viewNew}));
  };
  const viewAllPopular = () => {
    setViewPopular((prevState) => ({viewPoppular: !prevState.viewPopular}));
  };

  return (
    <Container>
      <StatusBar hidden={true} barStyle="light-content" />
      <Content>
        <View style={style.parent}>
          <View style={style.headerWrapper}>
            <Image style={style.header} source={header} />
            <Text style={style.headerText}>Fashion</Text>
            <Text style={style.headerText2}>sale</Text>
            <View style={style.notification}>
              <Icon name="bell" size={30} color="white" />
            </View>
          </View>
          <View style={style.content}>
            <View style={style.contentHeader}>
              <View>
                <Text style={style.title}>New</Text>
                <Text style={style.subTitle}>You've never seen it before!</Text>
              </View>
              <TouchableOpacity onPress={() => viewAllNew()}>
                <Text style={style.subTitle}>View All</Text>
              </TouchableOpacity>
            </View>
            {viewNew === false ? (
              <FlatList
                key={'_'}
                horizontal
                data={itemNew}
                renderItem={(item) => (
                  <New item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => '_' + item.id}
              />
            ) : (
              <FlatList
                key={'#'}
                data={itemNew}
                numColumns={2}
                renderItem={(item) => (
                  <New item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => '#' + item.id}
              />
            )}
          </View>
          <View style={style.content}>
            <View style={style.contentHeader}>
              <View>
                <Text style={style.title}>Popular</Text>
                <Text style={style.subTitle}>You've never seen it before!</Text>
              </View>
              <TouchableOpacity onPress={() => viewAllPopular()}>
                <Text style={style.subTitle}>View All</Text>
              </TouchableOpacity>
            </View>
            {viewPopular === false ? (
              <FlatList
                key={'_'}
                horizontal
                data={itemPopular}
                renderItem={(item) => (
                  <Popular item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => '_' + item.id}
              />
            ) : (
              <FlatList
                key={'#'}
                data={itemPopular}
                numColumns={2}
                renderItem={(item) => (
                  <Popular item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => '#' + item.id}
              />
            )}
          </View>
        </View>
      </Content>
    </Container>
  );
};
export default Home;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 30,
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 270,
    marginTop: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  headerWrapper: {
    position: 'relative',
  },
  header: {
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    color: 'white',
    fontSize: 50,
    left: 20,
    bottom: 100,
    fontWeight: 'bold',
  },
  headerText2: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    left: 20,
    bottom: 50,
  },
  content: {
    marginLeft: 20,
    marginTop: 20,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subTitle: {
    color: 'grey',
  },
});
