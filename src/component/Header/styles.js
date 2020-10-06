import { StyleSheet } from 'react-native';
import * as Common from '../../common/common';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Common.lightGreen,
  },
  iconStyle: {
    color: Common.whiteColor,
    fontSize: 30,
  },
  textInput: {
    height: 40,
    width: Common.deviceWidth / 1.7,
    color: Common.whiteColor,
  },
  headerStyle: {
    marginLeft:0
  },  
  headerStyleDua: {
    marginLeft:0
  },
  headerTitleStyle:{
    flex:1
  }  

});

module.exports = styles;
