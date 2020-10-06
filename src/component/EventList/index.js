import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import EventPost from '../EventPost';
import EventHeader from '../EventHeader';
import styles from './styles';
import * as Helper from '../../common/helper';
var moment = require('moment');
import ApiCaller from '../../common/apiCaller';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId:'',
      source:'',
      eventTitle:'',
      eventAddress:'',
      eventDate:'',
      eventDescrip:'',
      lat_long:'', 
      audienceName:'',
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }


  converDate(data){

    if(data !=''){
      var a = moment(data).format("DD MMMM YYYY") + " - " + moment(data).format("HH:mm:ss A");
      return a;
    }else{
      var a = '-';
      return a;
    }

  }


  onTitleClick(data, propsnya) {
    //this.props.navigation.navigate('DetailEvent');

    console.log("test anya "+ JSON.stringify(data) + JSON.stringify(this.props));

    this.setState({
      eventId:data.id,
      source:data.source,
      eventTitle:data.eventTitle,
      eventAddress:data.eventAddress,
      // eventDate:moment(data.eventDate).format('DD MMMM YYYY HH:mm:ss A'),
      eventDate:this.converDate(data.eventDate),
      eventDescrip:data.eventDescrip,
      lat_long:data.lat_long


    })


    const eventId = data.id; 
    const source = data.source; 
    const eventTitle = data.eventTitle; 
    const eventAddress = data.eventAddress;
    const eventDate = this.converDate(data.eventDate);
    const eventDescrip = data.eventDescrip;
    const lat_long = data.lat_long;
    
    this.props.navigation.navigate("DetailEvent", {eventId, source, eventTitle, eventAddress, eventDate, eventDescrip, lat_long});

    // dicek dulu apakah audience ini sudah terdaftar atau belum //
    
    // AsyncStorage.getItem("userData").then((data) => {
    
    //   console.log("onTitleClick",JSON.parse(data));
    //   // console.log("submitButton", this.state.eventId + "data userdata" + data + ":" + this.state.textClass + ":" + this.state.textTrack);

    //   ApiCaller('mobileIattend_cek_register', 'post', JSON.parse(data).token, {
    //     audienceid : JSON.parse(data).audienceid,
    //     email: JSON.parse(data).mail,
    //     eventId:this.state.eventId
        
    
    //   }).then(response =>{
    
    //     console.log("eventregisteraudienceakar", response);


    //     if(response.rows > 0){



    //       if(response.datanya[0].status == 1){

    //         const { source, eventId, eventTitle, eventAddress, eventDate, eventDescrip, lat_long} = this.state;
    //         this.props.navigation.navigate("DetailEvent", {eventId, source, eventTitle, eventAddress, eventDate, eventDescrip, lat_long});

    //       }else{

    //         ToastAndroid.show('You have already registered for this event and are waiting for the approval process.', ToastAndroid.SHORT);

    //       }




    //       // const { source, eventId, eventTitle, eventAddress, eventDate, eventDescrip, lat_long} = this.state;
    //       // this.props.navigation.navigate("DetailEvent", {eventId, source, eventTitle, eventAddress, eventDate, eventDescrip, lat_long});

          
    //     }else{

    //       this.testAlert();

    //     }

      
    //   });


    // }).done();






    
  }
 
  btnRegister(){
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    console.log("btnRegister");

    AsyncStorage.getItem("userData").then((data) => {
    
      console.log("btnRegister",JSON.parse(data));
      // console.log("submitButton", this.state.eventId + "data userdata" + data + ":" + this.state.textClass + ":" + this.state.textTrack);

      ApiCaller('mobileIattend_register', 'post', JSON.parse(data).token, {
        audienceid : JSON.parse(data).audienceid,
        email: JSON.parse(data).mail,
        eventId:this.state.eventId,
        audienceName: JSON.parse(data).name,
        eventTitle:this.state.eventTitle
        
    
      }).then(response =>{
    
        console.log("audienceakareventregister", response);

        if(response.rows == "sukses"){

          ToastAndroid.show('You have successfully registered this event. The process is awaiting approval.', ToastAndroid.SHORT);

        }else{
          ToastAndroid.show('Failed registered this event.', ToastAndroid.SHORT);
        }



      
      });


    }).done();
    

  };


  testAlert(){

    Alert.alert(
      'Register Event',
      'Do you want to register for this event?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.btnRegister()},
      ],
      { cancelable: false }
    )
    return true;
  }



  eventList() {
    return (
      this.props.eventList.map((data, i) => (

        <EventPost

          jumBaris = {this.props.eventList.length}
          barisId = {i}
          scrolldata = {this.props.scrolldata}
          // onTitleClick={()=>this.onTitleClick(data.id)}
          // navs={this.props.nav}
          // key={data.id}
          // eventId={data.id}
          // eventCreatedDate={data.created_date}
          // eventNama={data.nama}
          // eventIstansi={data.istansi}
          // eventJabatan={data.jabatan}
          // eventEmail={data.email}
          // eventHp={data.hp}
          // eventTtd={data.ttd}
          // eventPhoto={data.photo}

          onTitleClick={()=>this.onTitleClick(data)}
          navs={this.props.nav}
          source={data.source}
          eventId={data.id}
          key={data.id}
          eventTitle={data.eventTitle}
          eventAddress={data.eventAddress}
          // eventDate={ moment(data.eventDate).format('DD MMMM YYYY h:mm A')}
          eventDate={ moment(data.eventDate).format('DD MMMM YYYY')}
          eventDateOnly={data.eventDate}
          eventDescrip={data.eventDescrip}
          lat_long={data.lat_long}

          />
      ))
    );
  }

  noEvent() {
    return (
      <View style={styles.noEventStyle}>
        <Text style={styles.noeventText}>No Events</Text>
      </View>
    )
  }

  render() {

    return (
      <View>

        <EventHeader
          viewStyle={styles.viewStyle}
          textStyle={styles.textStyle}
          date={this.props.date}
        />
        {
          this.props.eventList !== undefined ?
          this.eventList() : this.noEvent()
        }
      </View>
    );
  }
}

EventList.propType = {
  date: PropTypes.string,
  eventList: PropTypes.object,
  nav: PropTypes.object
};
