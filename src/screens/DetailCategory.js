/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import {Container, Content} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import categoryAction from '../redux/actions/category';
import List from '../components/CardForCategory';

const CategoryDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const id = route.params;
  const {categoryDetail} = useSelector((state) => state.category);

  // console.log(categoryDetail[0].name);
  useEffect(() => {
    dispatch(categoryAction.getCategory());
    dispatch(categoryAction.getDetailCategory(id));
    dispatch(categoryAction.clear());
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [categoryDetail]);

  return (
    <Container>
      <Content style={style.bg}>
        <View style={style.header}>
          <Text style={style.title}>Category</Text>
          <View style={style.advFunc}>
            <TouchableOpacity style={style.func}>
              <Icon name="filter" size={18} />
              <Text style={style.text}>Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.func}>
              <Icon name="sort" size={18} />
              <Text style={style.text}>Price: lowest to high</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.func}>
              <Icon name="th" size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.content}>
          <FlatList
            data={categoryDetail}
            renderItem={(item) => (
              <List item={item} navigation={navigation} route={route} />
            )}
          />
        </View>
      </Content>
    </Container>
  );
};
export default CategoryDetail;

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#E5E5E5',
  },
  header: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  advFunc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
  },
  func: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
