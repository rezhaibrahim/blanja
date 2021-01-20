/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBase,
} from 'react-native';
import {Button, Card, Container, Content} from 'native-base';

import {StarRatings} from '../components';
import List from '../components/NewItem';

import img from '../assets/blanja.png';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';
import New from '../components/NewItem';
import itemAction from '../redux/actions/item';
import cartAction from '../redux/actions/mybag'
const ImageCarousel = ({item}) => {
  console.log(item.item);
  const image = API_URL + item.item.slice(7);
  return (
    <View>
      <Image style={style.img} source={{uri: image}} />
    </View>
  );
};

const DetailItem = ({route, navigation}) => {
  // console.log(route);
  const id = route.params;
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth)
  const {itemDetail} = useSelector((state) => state.item);
  const {itemNew} = useSelector((state) => state.item);
  const {itemPopular} = useSelector((state) => state.item);
  // console.log(itemDetail);
  const {
    itemName,
    price,
    description,
    rating,
    color,
    picture,
    category,
  } = itemDetail;
  // const image1 = API_URL + picture[0].slice(7)
  // const image2 =API_URL + picture[1].slice(7)
  // const image3 =API_URL + picture[2].slice(7)
  // const image4 =API_URL + picture[3].slice(7)

  useEffect(() => {
    dispatch(itemAction.getDetailItem(id));
    dispatch(itemAction.getNewItem());
    dispatch(itemAction.getPopularItem());
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [itemDetail]);

  // let formatRp = price.toString().split('').reverse().join('');
  // let slice = price.match(/\d{1,3}/g);
  // let combine	= slice.join('.').split('').reverse().join('');
  const addToCart =() => {
    const data = {
      itemsId: id,
      qty: 1,
    };
    dispatch(cartAction.postToBag(token,data));
    dispatch(cartAction.getMyBag(token));
    navigation.navigate('Bag')
  }
  return (
    <>
      <View style={style.parent}>
        <ScrollView>
          <View style={style.wrapper}>
            <FlatList
              horizontal
              data={picture}
              renderItem={(item) => <ImageCarousel item={item} />}
            />
            {/* <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                decelerationRate="fast"
                pagingEnabled>

                  <Image style={style.img} source={{uri:image1}} />
                  <Image style={style.img} source={{uri:image2}} />
                  <Image style={style.img} source={{uri:image3}} />
                  <Image style={style.img} source={{uri:image4}} />
              </ScrollView> */}

            <View style={style.content}>
              <View style={style.header}>
                <View>
                  <Text style={style.category}>{category}</Text>
                  <Text style={style.itemName}>{itemName}</Text>
                </View>
                <Text style={style.price}>Rp.{price}</Text>
              </View>
              <View style={style.rating}>
                <StarRatings q={rating} />
              </View>
              <View>
                <Text>{description}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text>{color}</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 40}}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                  You can also like this
                </Text>

                <FlatList
                  horizontal
                  data={itemNew}
                  renderItem={(item) => (
                    <New item={item} navigation={navigation} />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={style.btnWrapper}>
          <Button onPress={() => addToCart()} style={style.btn} block rounded>
            <Text style={style.btnText}>Add to cart</Text>
          </Button>
        </View>
      </View>
    </>
  );
};
export default DetailItem;

const win = Dimensions.get('window');
const ratio = win.width / 328;

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  price: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  category: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemName: {
    color: 'gray',
    fontSize: 15,
  },
  img: {
    width: win.width,
    height: 380 * ratio,
  },
  wrapper: {
    marginLeft: 0,
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  btnWrapper: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderColor: '#E5E5E5',
  },
  btn: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    marginVertical: 10,
  },
  headerWrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
});
