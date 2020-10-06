
import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {
    Icon,
    Text,
    Header,
    Body,
    Title,
    List,
    ListItem,
  } from "native-base";

import styles from './styles'
import { connect } from 'react-redux';

class AgendaDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      audienceid:'',
    };

    
    this.onPressScheduleBySpeaker = this.onPressScheduleBySpeaker.bind(this);
  }

  componentDidMount(){
    console.log("trace agendaDetail",this.props.infoDetail);
  }

  componentWillMount() {

    const value = {
      accessToken: this.state.accessToken,
      eventId: {
        eventId: this.props.infoDetail.eventId,
      }
     
    }

    this.props.dispatch({
      type: 'FETCH_AGENDA_LIST',
      payload: { ...value }
    });


  }



  onPressScheduleByDay(id) {
    this.props.nav.navigate('ScheduleByDay', this.props.infoDetail)
  }


  onPressScheduleBySpeaker(id) {
    const eventId = {
      eventId: id
    }
    this.props.dispatch({
      type: 'FETCH_SPEAKERS_LIST',
      payload: { ...eventId }
    });
    this.props.nav.navigate('ScheduleBySpeaker', { ...this.props.infoDetail });
  }



  render() {

    // console.log("trace anya",this.props.infoDetail);

    const { eventTitle,eventDescription,eventAddress } =this.props.infoDetail
    
    return (

      // Try setting `flexDirection` to `column`.
      <View style={{flex: 4, flexDirection: 'column', justifyContent: 'space-around',}}>
      <Header style={styles.headerStyle}>
                    <Body >
                        <Title style={styles.forTitle} >{eventTitle}</Title>
                        <Text style={styles.forSubTitle}>{eventDescription}</Text>
                        <Text style={styles.forSubTitle}>{eventAddress}</Text>
                    </Body>
                </Header>
                <List>

                  <ListItem style={{marginLeft:0,paddingLeft:0}} >
                    {/* <TouchableOpacity onPress={() => this.props.nav.navigate('ScheduleByDay',this.props.infoDetail)} > */}
                    <TouchableOpacity onPress={() => this.onPressScheduleByDay(this.props.infoDetail.eventId)} >
                    <Text style={{marginLeft:20,paddingLeft:0}}>Schedule By Day</Text>
                  </TouchableOpacity>
                  </ListItem>
                  <ListItem style={{marginLeft:0,paddingLeft:0}}>
                  <TouchableOpacity onPress={() => this.onPressScheduleBySpeaker(this.props.infoDetail.eventId)} >
                    <Text style={{marginLeft:20,paddingLeft:0}}>Schedule By Speakers</Text>
                    </TouchableOpacity>
                  </ListItem>

                </List>

      </View>

    );
  }
};

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AgendaDetail);
