import { Dimensions } from 'react-native';
// declare height width
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = {
  deviceHeight,
  deviceWidth,

  // size
  backButtonIconSize: 25,
  mainTextFontSize: 17,
  TitleText: 23,

  lightGreen: '#DD0212',
  statusBarColor: '#A8BF16',
  darkColor: '#4A4A4A',
  darkBlack: '#555555',
  lightDarkColor: '#ADADAD',
  whiteColor: '#ffffff',
  lightGray: '#F5F5F5',
  subTitleText: '#626262',
  drawerText: '#1B1B1C',
  blackColor: '#000',
  termTextColor: '#B1B1B1',
  buttonTextColor: '#C0C0C0',

};
