import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EventPost from '../EventPost/eventpostrandom';
import EventHeader from '../EventHeader';
import styles from './styles';
import * as Helper from '../../common/helper';

var moment = require('moment');

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // stateNumber: this.props.eventList[0].id,
      // LastStateNumber:this.props.jumlah
    };
    // this.onTitleClick = this.onTitleClick.bind(this);
  }

  componentWillMount(){

    
    // console.log("trace anya props",    this.props.eventList[0].id);
    this.props.eventList.map((data, i) => (
      console.log("trace anya eventlist random", data)
      // this.setState({stateNumber: data.id})
    ))

  }

  // onTitleClick(id) {
  //   //this.props.navigation.navigate('DetailEvent');
  // }

  eventheader(){
        <EventHeader
          viewStyle={styles.viewStyle}
          textStyle={styles.textStyle}
          date={this.props.date}
        />
  }

  eventList() {

    return (
      this.props.eventList.map((data, i) => (

        <EventPost
          // onTitleClick={()=>this.onTitleClick(data)}
          jumBaris = {this.props.eventList.length}
          barisId = {i}
          navs={this.props.nav}
          source={data.source}
          eventId={data.id}
          key={data.id}
          eventTitle={data.name}
          eventAgenda="Agenda"
          eventTime={moment(data.time).format('HH:mm:ss A')}
          eventTimeFinished={moment(data.timeFinished).format('HH:mm:ss A')}
          eventSpeakerName={data.speakername}
          lat_long={data.lat_long}
          eventDescription={data.description}
          eventLocation={data.location}
          files={data.files}
          file_title={data.file_title}
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

    // console.log("trace anya akhir", this.state.stateNumber);

    return (
      <View>

        {
          this.props.eventList !== undefined ?
          this.eventList() : this.noEvent()
        }
        {/* <EventHeader
          viewStyle={styles.viewStyle}
          textStyle={styles.textStyle}
          date={this.props.date}
        /> */}

        <EventHeader
          // viewStyle={styles.viewStyleListRandom}
          viewStyle={ this.props.eventList[0].id !== this.props.jumlah ? styles.viewStyleListRandom : styles.viewStyleListRandomNone}
          textStyle={styles.textStyle}
        />

      </View>
    );
  }
}

EventList.propType = {
  date: PropTypes.string,
  eventList: PropTypes.object,
  nav: PropTypes.object,
  jumlah: PropTypes.string,
};
