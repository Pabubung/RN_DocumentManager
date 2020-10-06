import { StyleSheet } from 'react-native';
import * as Common from '../../common/common';

const styles = StyleSheet.create({
  viewStyle: {
    padding: 0,
    paddingBottom: 0,
    flex: 1,
  },
  viewStyleRandom: {
    // padding: 15,
    // paddingBottom: 0,
    // flex: 1,
  },
  gridStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Common.lightGray,
    paddingBottom: 15,
  },
  gridStyleRandom: {
    borderBottomWidth: 1,
    borderBottomColor: Common.lightGray,
    // paddingBottom: 15,
    // paddingTop: 15,
    padding: 15,
    flex: 1,
  },
  eventImageStyle: {
    height: Common.deviceWidth / 7,
    width: Common.deviceWidth / 7,
    marginTop: 5,
  },
  buttonView: {
    backgroundColor: Common.lightGreen,
    marginTop: 10,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Common.whiteColor,
    fontWeight: '500',
  },
  eventTitle: {
    // fontSize: 17,
    fontSize: 15,
    color: Common.darkBlack,
  },
  CircleShapeView: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#EEEEEE',
    marginTop: 5,
    marginRight: 5,
},

});

module.exports = styles;
