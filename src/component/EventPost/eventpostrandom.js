import React from 'react';
import { Text, View, Image,TouchableOpacity, ToastAndroid } from 'react-native';
import { Grid, Row, Col, Button, Thumbnail, Badge, Content, Icon, Right, ListItem, Left, Body} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';


onPressAgenda = (props) => {

  
    console.log("onPressAgenda", props);

    if(props.eventTitle == "Tanya Jawab"){
      ToastAndroid.show('Sorry, there is no menu for this agenda', ToastAndroid.SHORT);
    }else{
      props.navs.navigate("ScheduleByDayDetail", props);
    }


  // const { navs, eventId, eventCreatedDate, eventNama, eventIstansi, eventJabatan, eventEmail, eventHp, eventTtd, eventPhoto } = props;
  // navs.navigate("DetailEvent",{eventId, eventCreatedDate, eventNama, eventIstansi, eventJabatan, eventEmail, eventHp, eventTtd, eventPhoto});


  // const { navs, source, eventId, eventTitle, eventAddress, eventDate, eventDescrip, lat_long} = props;
  // navs.navigate("DetailEvent",{eventId, source, eventTitle, eventAddress, eventDate, eventDescrip, lat_long});

}


const EventPost = props => (
  <View style={styles.viewStyleRandom}>

    { props.barisId == props.jumBaris - 1 ? 
                
                <ListItem 
                noBorder
                thumbnail
                button onPress={() => this.onPressAgenda(props)}
                >
                  <Left style={{margin:0}}>
                    <View>
                      <Text style={{textAlign:'right'}}>{props.eventTime}</Text>
                      <Text style={{textAlign:'right'}}>{props.eventTimeFinished}</Text>
                    </View>
                  </Left>
                  <Body>
                    <Text>{props.eventTitle}</Text>
                    <Text note numberOfLines={1}>Speakers : {props.eventSpeakerName}</Text>
                  </Body>
                </ListItem>
              
                : 

                <ListItem 
                thumbnail
                button onPress={() => this.onPressAgenda(props)}>
                  <Left style={{margin:0}}>
                    <View>
                      <Text style={{textAlign:'right'}}>{props.eventTime}</Text>
                      <Text style={{textAlign:'right'}}>{props.eventTimeFinished}</Text>
                    </View>
                  </Left>
                  <Body>
                    <Text>{props.eventTitle}</Text>
                    <Text note numberOfLines={1}>Speakers : {props.eventSpeakerName}</Text>
                  </Body>
                </ListItem>
            
              }

  </View>
);

EventPost.propType = {
  source: PropTypes.string,
  eventTitle: PropTypes.string,
  eventAddress: PropTypes.string,
  eventAgenda: PropTypes.string,
  eventTime: PropTypes.string,
  eventTimeFinished: PropTypes.string,
  eventSpeakerName: PropTypes.string,
  eventDescription: PropTypes.string,
  navs: PropTypes.object,
  onTitleClick: PropTypes.func,
};

export default EventPost;
