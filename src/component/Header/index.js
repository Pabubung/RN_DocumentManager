import React from 'react';
import PropTypes from 'prop-types';
import { Right, Body, Left, Header, Button, Icon, Title } from 'native-base';
import { TextInput, Text, View } from 'react-native';
import * as Constant from '../../common/constant';
import styles from './styles';
import * as Common from '../../common/common';
import * as Helper from '../../common/helper';

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      nav:''
    };

    this.onPressSchedule = this.onPressSchedule.bind(this);
    this.onPressEvent = this.onPressEvent.bind(this);
  }

  UNSAFE_componentDidMount(){

    console.log("trace header header",this.props);

  }

  UNSAFE_componentWillReceiveProps(nextprops){
    // console.log("trace header header nextprops",nextprops);
    this.setState({nav:nextprops.navigation});
  }

  onPressSchedule(){

    // console.log("trace header onPressSchedule", this.state.text);
    // Helper.navigateToSearch()
    // Helper.navigateToPage(this, 'Login');
    this.state.nav.navigate('Search');
  }

  onPressEvent(){

    // console.log("trace header onPressEvent", this.state.text);

    let obj={
      SearchName:this.state.text
    };


    // Helper.navigateToSearch()
    // Helper.navigateToPage(this, 'Login');
    this.state.nav.navigate('Search', { ...obj });

  }

  cekTitle(){
{/* <Title style={this.props.headerContainer == 33 ? styles.headerStyle : styles.headerStyleDua}>{this.props.title}</Title> */}
    var titlePush = [];

    if(this.props.headerContainer == undefined){

      if(this.props.title == "Log In"){
        titlePush.push(<Title style={styles.headerStyleDua}>{this.props.title}</Title>)
      }else{
        titlePush.push(<Title style={styles.headerStyle}>{this.props.title}</Title>)
      }

    }else{

      titlePush.push(<Title style={styles.headerStyle}>{this.props.title}</Title>)

    }

    return (
      <View>
      {titlePush}
      </View>
    )
  }


  render() {
    return (
      <Header style={styles.headerContainer}>
        {this.props.leftIcon ? 
        <Left style={{flex: 0, marginRight:10}}>
          <Button transparent onPress={this.props.onLeftIconClick}>
            <Icon active name={this.props.leftIcon} style={styles.iconStyle} />
          </Button>
        </Left> : null}
        <Body style={styles.headerTitleStyle}>
          {(this.props.search) ?

            this.props.headerContainer == 33 ? 
            <TextInput
              style={styles.textInput}
              underlineColorAndroid={Common.lightGreen}
              placeholderTextColor="#ffffff"
              placeholder="Event name or password"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              onSubmitEditing= {()=> this.onPressEvent()}
            /> : 
            
            <TextInput
              style={styles.textInput}
              underlineColorAndroid={Common.lightGreen}
              placeholderTextColor="#ffffff"
              placeholder="Please type name here"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              onSubmitEditing= {() => this.onPressSchedule()}
            />

            : 
            this.cekTitle()
            
          }
        </Body>

            <Right style={{ flex: 0, flexBasis: 48 }}>
                {/* <Button transparent onPress={this.props.onMoreIconClick}>
                    <Icon name="more" />
                </Button> */}
            </Right>

        <Right >
          {/* <Button transparent onPress={this.props.onRightIconClick}>
            <Icon active name={this.props.rightIcon} style={styles.iconStyle} />
          </Button>

          <Button transparent onPress={this.props.onRightIconClick}>
            <Icon active name={this.props.rightIcon} style={styles.iconStyle} />
          </Button> */}

          {
            this.props.rightIconTiga == 'sync' ? 
            <Button transparent onPress={this.props.onRightIconClick}>
            <Icon active name={this.props.rightIconTiga} style={styles.iconStyle} />
            </Button>
            : null
          }

          {/* {
            this.props.rightIconTiga == 'notif' ? 
            <Button hashText transparent>
            <Text style={{color:"#FF0000", backgroundColor:"#ffffff", paddingTop:0, paddingBottom:0, paddingRight:2, paddingLeft:2,
            borderRadius: 5}} active name={this.props.rightIconTiga}>
            1</Text>
            </Button>
            : null
          } */}
          {/* <Button transparent onPress={this.props.onRightIconClick}>
            <Icon active name={this.props.rightIconDua}/>
          </Button> */}
        </Right>

      </Header>
    );
  }
}

Header.propType = {
  onLeftIconClick: PropTypes.func,
  iconName: PropTypes.string,
  leftIcon: PropTypes.string,
  title: PropTypes.string,
  rightIcon: PropTypes.string,
  onMoreIconClick: PropTypes.func
};
