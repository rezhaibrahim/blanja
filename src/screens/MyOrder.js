/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {H1} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import List from '../components/CardForMyOrder';
import orderAction from '../redux/actions/order';

const MyOrder = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.order);
  const {token} = useSelector((state) => state.auth);
  console.log(data);
  useEffect(() => {
    dispatch(orderAction.getOrder(token));
  }, []);
  useEffect(() => {}, [data]);

  return (
    <ScrollView>
      <View style={style.parent}>
        <View style={style.title}>
          <H1 style={style.titleText}>My Order</H1>
        </View>
        <FlatList
          data={data}
          renderItem={(item) => <List item={item} navigation={navigation} />}
        />
      </View>
    </ScrollView>
  );
};
export default MyOrder;

const style = StyleSheet.create({
  parent: {
    margin: 13,
    flex: 1,
  },
  title: {
    marginTop: 25,
    marginBottom: 30,
  },
  titleText: {
    fontWeight: 'bold',
  },
});
