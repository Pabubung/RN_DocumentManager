import { StyleSheet } from 'react-native';
import * as Common from '../../common/common';


import {Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');

export const w = percent => (width * percent) / 150;
export const h = percent => (height * percent) / 150;
export const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:Common.lightGreen,
    backgroundColor:'#3ad3f2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogin: {
    flex: 1,
    backgroundColor: Common.whiteColor,
  },
  splashStyle: {
    height: Common.deviceHeight,
    width: Common.deviceWidth,
    resizeMode: 'stretch',
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
    width: '80%',
    height: w(50),
  },
  // ini untuk intro
  imageIntro: {
    width: 200,
    height: 200,
  },
  textIntro: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24
  },
  titleIntro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
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
  body: {
    flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    // backgroundColor: '#F2F2F2',
    width: '80%',
    // height:200,
    // alignContent:'center',
    // alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
  },
  
  inputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingLeft:10,
    // padding:10,
    padding:w(2),
    paddingTop: 0,
    // backgroundColor: Common.whiteColor,
    borderBottomWidth:1,
    marginBottom:w(4),
    // backgroundColor:"#ffffff",
    // borderRadius: 50,
    // borderRadius: w(10),
  },
  
  textInputAlt: {
    // borderColor: '#e71636',
    // borderTopWidth: 0.8,
    // borderRightWidth:0.8,
    // borderBottomWidth:0.8,
    // borderLeftWidth: 0.8,
    // paddingLeft:10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // backgroundColor:"#ffffff",
    // marginBottom:0

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingLeft:10,
    // padding:10,
    padding:w(2),
    paddingTop: 0,
    // backgroundColor: Common.whiteColor,
    borderBottomWidth:1,
    borderColor: '#e71636',
    // marginBottom:w(4),
    marginBottom:w(0)
    // backgroundColor:"#ffffff",
    // borderRadius: 50,
    // borderRadius: w(10),
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    // fontSize:w(3)
    fontSize:14
    
  },
  buttonStyle:{
    // backgroundColor:'#01c853',
    backgroundColor:'#106b98',
    width:'100%',
    // padding:20,
    // padding:w(4),
    padding:15,
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 20,
    // borderRadius: 50,
    // borderRadius: w(10),
    // borderRadius: 10,
  },

});

module.exports = styles;
