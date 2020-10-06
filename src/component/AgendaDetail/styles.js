import * as Common from '../../common/common';

export default {
  text: {
    alignSelf: 'center',
    marginBottom: 7,
  },
  mb: {
    marginBottom: 15,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#FFF',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  iconText: {
    fontSize: 12,
    justifyContent: 'center',
    width: 90,
  },
  icon: {
    width: 90,
    height: 90,
    justifyContent: 'center',
  },
  col: {
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  row: {
    paddingBottom: 20,
  },
  viewIcon: {
    width: 100, height: 100, justifyContent: 'center', padding: '5%', marginBottom: '5%',
  },
  headerStyle: {

    // backgroundColor: Common.lightGreen, 
    // justifyContent: 'center', 
    // height: 100,

    backgroundColor:"#666666",
    justifyContent: "center", 
    height:120,
    paddingTop: 15,
    paddingBottom: 15,

  },
  forTitle: {
    alignSelf: 'center',
    marginBottom: '2%',
    color: Common.whiteColor,
  },
  forSubTitle: {
    alignSelf: 'center',
    fontSize: 14,
    color: Common.whiteColor,
  },
  description:{
    borderWidth:1,
    padding:10,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  },
  descriptionText:{
    fontSize:12
  },
  confirmBtn:{
    alignSelf:'center',
    marginTop:10
  }

};
