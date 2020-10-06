import React from 'react';
import { View, Image,TouchableOpacity, ToastAndroid, AsyncStorage } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ApiCaller from '../../common/apiCaller';
var moment = require('moment');


onPressDua = (props) => {

  console.log("onPressDua", props);
  // const { navs, eventId, eventCreatedDate, eventNama, eventIstansi, eventJabatan, eventEmail, eventHp, eventTtd, eventPhoto } = props;
  // navs.navigate("DetailEvent",{eventId, eventCreatedDate, eventNama, eventIstansi, eventJabatan, eventEmail, eventHp, eventTtd, eventPhoto});
  // const { navs, source, eventId, eventTitle, eventAddress, eventDate, eventDescrip, lat_long} = props;

  props.onTitleClick(true, props);

  // AsyncStorage.getItem("userData").then((data) => {
   
  //   console.log("onPressDua",JSON.parse(data));
  //   // console.log("submitButton", this.state.eventId + "data userdata" + data + ":" + this.state.textClass + ":" + this.state.textTrack);

  //   ApiCaller('eventregisteraudienceakar', 'post', JSON.parse(data).token, {
  //     audienceid : JSON.parse(data).audienceid,
  //     email: JSON.parse(data).email,
  //     eventId:props.eventId
      
  
  //   }).then(response =>{
  
  //     console.log("eventregisteraudienceakar", response);
    
  //   });


  // }).done();







  // const { navs, source, eventId, eventTitle, eventAddress, eventDate, eventDescrip, lat_long} = props;
  // navs.navigate("DetailEvent",{eventId, source, eventTitle, eventAddress, eventDate, eventDescrip, lat_long});

}

onPressTiga = (props) => {

  var today = moment();
  var dateCreated = moment(props.eventDateOnly).format('DD-MMMM-YYYY');
  var deadline = moment(new Date(dateCreated)).add(14,'days').format('DD-MMMM-YYYY');

  console.log("onPressTiga",moment(props.eventDateOnly).format('DD-MMMM-YYYY'), "today : " + today + "deadlineDay : " + deadline + " : " + moment(props.eventDateOnly) + ":" + moment(new Date(dateCreated)).add(14,'days')
  );



  if( moment() > moment(new Date(dateCreated)).add(14,'days') ){
    ToastAndroid.show('Sorry, this event is over', ToastAndroid.SHORT);
  }else{
    props.onTitleClick(true, props);
  }

  // props.onTitleClick(true, props);

}




const EventPost = props => (

  <View style={styles.viewStyle}>

            { props.barisId == props.jumBaris - 1 ? 
             
             props.scrolldata == 'current' ? 

              <ListItem 
              style={{paddingLeft:8, marginLeft:0}} button onPress={() => this.onPressDua(props)}
              noBorder
              thumbnail>
                <Left style={{margin:0}}>
                  {/* <Thumbnail square source={{ uri: 'http://192.168.90.95:1337/get_file?fd='+props.eventPhoto }} /> */}
                  <Thumbnail square source={{uri:"https://static.thenounproject.com/png/626764-200.png"}} />
                </Left>
                <Body>
                  {/* <Text>{props.eventId} - {props.barisId} - {props.jumBaris}</Text> */}
                  <Text>{props.eventTitle}</Text>
                  <Text note numberOfLines={1}>{props.eventAddress}</Text>
                </Body>
              </ListItem>

              :
              <ListItem 
              style={{paddingLeft:8, marginLeft:0}} button onPress={() => this.onPressTiga(props)}
              noBorder
              thumbnail>
                <Left style={{margin:0}}>
                  {/* <Thumbnail square source={{ uri: 'http://192.168.90.95:1337/get_file?fd='+props.eventPhoto }} /> */}
                  <Thumbnail square source={{uri:"https://static.thenounproject.com/png/626764-200.png"}} />
                </Left>
                <Body>
                  {/* <Text>{props.eventId} - {props.barisId} - {props.jumBaris}</Text> */}
                  <Text>{props.eventTitle}</Text>
                  <Text note numberOfLines={1}>{props.eventAddress}</Text>
                </Body>
              </ListItem>


             
              : 

              props.scrolldata == 'current' ? 

              <ListItem 
              style={{paddingLeft:8, marginLeft:0}} button onPress={() => this.onPressDua(props)}
              thumbnail>
                <Left style={{margin:0}}>
                  {/* <Thumbnail square source={{ uri: 'http://192.168.90.95:1337/get_file?fd='+props.eventPhoto }} /> */}
                  <Thumbnail square source={{uri:"https://static.thenounproject.com/png/626764-200.png"}} />
                </Left>
                <Body>
                  {/* <Text>{props.eventId} - {props.barisId} - {props.jumBaris}</Text> */}
                  <Text>{props.eventTitle}</Text>
                  <Text note numberOfLines={1}>{props.eventAddress}</Text>
                </Body>
              </ListItem>

              :
              <ListItem 
              style={{paddingLeft:8, marginLeft:0}} button onPress={() => this.onPressTiga(props)}
              thumbnail>
                <Left style={{margin:0}}>
                  {/* <Thumbnail square source={{ uri: 'http://192.168.90.95:1337/get_file?fd='+props.eventPhoto }} /> */}
                  <Thumbnail square source={{uri:"https://static.thenounproject.com/png/626764-200.png"}} />
                </Left>
                <Body>
                  {/* <Text>{props.eventId} - {props.barisId} - {props.jumBaris}</Text> */}
                  <Text>{props.eventTitle}</Text>
                  <Text note numberOfLines={1}>{props.eventAddress}</Text>
                </Body>
              </ListItem>
          
          
            }



    
  </View>
);

EventPost.propType = {
  jumBaris: PropTypes.string,
  barisId: PropTypes.string,
  // eventId: PropTypes.string,
  // eventCreatedDate: PropTypes.string,
  // eventNama: PropTypes.string,
  // eventIstansi: PropTypes.string,
  // eventJabatan: PropTypes.string,
  // eventEmail: PropTypes.string,
  // eventHp: PropTypes.string,
  // eventTtd: PropTypes.string,
  // eventPhoto: PropTypes.string,
  // navs: PropTypes.object,
  // onTitleClick: PropTypes.func,
  source: PropTypes.string,
  eventTitle: PropTypes.string,
  eventAddress: PropTypes.string,
  eventDate: PropTypes.string,
  eventDescrip: PropTypes.string,
  navs: PropTypes.object,
  onTitleClick: PropTypes.func
};

export default EventPost;
