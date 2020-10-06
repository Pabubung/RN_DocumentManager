import { StyleSheet } from 'react-native';
import * as Common from './common';

import {Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');

export const w = percent => (width * percent) / 150;
export const h = percent => (height * percent) / 150;
export const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 150;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.whiteColor,
  },
  containerAvoiding: {
    flex: 1,
    // backgroundColor: Common.whiteColor,
    // height:300,
    // width:300,
    // textAlign:'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // flexDirection: 'row',
    // alignContent:'center',
  },
  body: {
    flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    // backgroundColor: '#F2F2F2',
    width: w(80),
    // height:200,
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    
  },
  
  errorColor: {
    paddingTop: 5,
    paddingRight: 5,
    color: 'red',
  },
  
  inputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft:10,
    backgroundColor: Common.whiteColor,
    borderBottomWidth:0,
    marginBottom:1
    // backgroundColor:"#ffffff"
  },
  iconStyle: {
    padding: 10
  },
  textInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    width:100
  },
  logInTitle: {
    flex: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
  logInTitleText: {
    color: Common.blackColor,
    fontSize: 20,
    fontWeight: '500'
  },
  logInCaptionText: {
    fontSize: 15,
  },
  logInViewStyle:{
    backgroundColor:'#eeeeee',
    flex:1,
    // width:300,
    // height:300,
    // alignItems:'center',
    // alignContent: 'center',
    // alignSelf:'center',
  },

  logInViewStyleRegis: {
    marginLeft: 10,
    marginRight: 10,
    // flex: 2.5,
    marginTop:20,
    
  },
  aboutText: {
    padding: 20,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 16,
    marginTop: 20,
  },
  buttonStyle: {
    marginTop: 25,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
  },
  buttonTextStyle: {
    color: Common.darkColor
  },
  termsConditionStyle: {
    flex: 4.5,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignSelf: 'center',
    paddingLeft:30,
    paddingRight:30
  },
  termsConditionStyleDua: {
    flex: 4.5,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignSelf: 'center',
    paddingLeft:30,
    paddingRight:30
  },
  termStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: Common.darkBlack
  },
  privacyStyle: {
    textDecorationLine: 'underline'
  },
  termUseStyle: {
    textDecorationLine: 'underline'
  },
  alertTeks:{
    marginTop:10,
    color: "#ff0000"
  },
  alertTeksEmail:{
    marginTop:5,
    marginBottom:5,
    color: "#ff0000"
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  teksinputan:{
    backgroundColor: "#fff",
    // flex: 1,
    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 13.3,
    paddingLeft: 10,
    color: '#424242'
  },
  textInputAlt: {
    borderColor: '#e71636',
    borderTopWidth: 0.8,
    borderRightWidth:0.8,
    borderBottomWidth:0.8,
    borderLeftWidth: 0.8,
    paddingLeft:10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Common.whiteColor,
    marginBottom:0
  },
  backgroundImage: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: null,
    // height: null,
    flex: 1,
    width: null,
    height: null
  },
});

module.exports = styles;
