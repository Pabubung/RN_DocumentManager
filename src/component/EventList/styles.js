import { StyleSheet } from 'react-native';
import * as Common from '../../common/common';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Common.lightGray,
    padding: 10,
  },
  viewStyleListRandom:{
    backgroundColor: '#c2da88',
    // padding: 10,
    height:5,
    flex: 2,
  },
  viewStyleListRandomNone:{
    backgroundColor: '#c2da88',
    // padding: 10,
    height:0,
    flex: 2,
  },  
  textStyle: {
    color: Common.darkColor,
    fontWeight: 'bold',
  },
  noeventText: {
    color: Common.darkColor,
    fontSize: 20,
  },
  noEventStyle: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
