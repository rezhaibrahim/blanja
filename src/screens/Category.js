/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Button, Container, Content, List, ListItem} from 'native-base';
import CardForListCategory from '../components/CardForListCategory';
import {useDispatch, useSelector} from 'react-redux';
import categoryAction from '../redux/actions/category';

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const {category} = useSelector((state) => state.category);
  // console.log(category);
  const [view, setView] = useState(false);

  const viewAll = () => {
    setView((prevState) => ({view: !prevState.view}));
  };

  useEffect(() => {
    dispatch(categoryAction.getCategory());
  }, []);
  useEffect(() => {
    // console.log("cek",itemNew);
  }, [category]);
  return (
    <Container>
      <Content>
        <View style={style.parent}>
          <View style={style.btn}>
            <Text style={style.Text}>SUMMER SALES</Text>
            <Text style={style.Text}>Up to 50% off</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.title}>Choose Category</Text>
            <TouchableOpacity onPress={() => viewAll()}>
              <Text style={style.subTitle}>View All</Text>
            </TouchableOpacity>
          </View>

          {view === false ? (
            <FlatList
              key={'_'}
              horizontal
              data={category}
              renderItem={(item) => (
                <CardForListCategory item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => '_' + item.id}
            />
          ) : (
            <FlatList
              key={'#'}
              numColumns={1}
              data={category}
              renderItem={(item) => (
                <CardForListCategory item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => '#' + item.id}
            />
          )}
        </View>
      </Content>
    </Container>
  );
};
export default Categories;
const style = StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  btn: {
    borderRadius: 25,
    backgroundColor: '#DB3022',
    marginBottom: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    color: 'grey',
  },
  subTitle: {
    color: 'grey',
    marginLeft: 150,
  },
});
