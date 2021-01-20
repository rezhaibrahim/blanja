import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import yellow from '../../../assets/star-yellow.png';
import grey from '../../../assets/star-grey.png';

export default class StarRatings extends Component {
  render() {
    return (
      <View style={styles.parent}>
        {[...Array(5)].map((i, o) => {
          if (this.props.q === null) {
            return <Image style={styles.star} key={o} source={grey} />;
          }
          if (o + 1 <= Math.round(this.props.q)) {
            return <Image style={styles.star} key={o} source={yellow} />;
          }
          return <Image style={styles.star} key={o} source={grey} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
  star: {
    width: 15,
    height:15
  },
});
