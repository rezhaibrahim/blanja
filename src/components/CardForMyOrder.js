import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import dateFormat from 'dateformat';

const CardMyOrder = ({item, navigation}) => {
  console.log(item.item);
  const {id, transaction_id, summary, created_at} = item.item;
  const toDetail = () => {
    navigation.navigate('OrderDetails', id);
    console.log('item id', id);
    // dispatch(itemAction.getDetailItem(id))
  };
  const date = dateFormat(created_at, 'dd-mm-yyyy');
  return (
    <TouchableOpacity onPress={() => toDetail()}>
      <Card style={style.card}>
        <View style={style.header}>
          <Text style={style.orderNumb}>Order No.{id}</Text>
          <Text style={style.headerDate}>{date}</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Tracking number : </Text>
          <Text style={style.listValue}> {transaction_id}</Text>
        </View>

        <View style={style.cardBody}>
          <Text style={style.listName}>Total Amount : </Text>
          <Text style={style.listValue}>Rp.{summary}</Text>
        </View>
        <View style={style.footer}>
          <Text style={style.success}>on the way</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
export default CardMyOrder;

const style = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderNumb: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerDate: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
  cardBody: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  listName: {
    color: 'grey',
  },
  listValue: {
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  success: {
    fontSize: 15,
    color: 'green',
  },
  danger: {
    fontSize: 15,
    color: 'red',
  },
});
