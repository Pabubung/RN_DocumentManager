import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet, Image, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

function LoadingSign() {
  return (
    <View style={styles.offlineContainer}>

      <StatusBar
          //  hidden={false}
          //  translucent={true}
          backgroundColor="#75848d"
          barStyle="light-content"
          animated
          // barStyle={barStyle}
          // backgroundColor={backgroundColor}
          translucent
          showHideTransition={'fade'}
      />

      <Image
        source={require('../../images/OfflineLogo.png')}
        resizeMode={Image.resizeMode.contain}
        style={styles.paragraph}
      >
      </Image>
      <Text style={styles.offlineTextHeader}>Oops, your connection seems off...</Text>
      <Text style={styles.offlineText}>Keep calm, please Check your connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    // if (!this.state.isConnected) {
    //   return <MiniOfflineSign />;
    // }
    // return null;

    return <LoadingSign />;
  }
}

const styles = StyleSheet.create({
  // offlineContainer: {
  //   backgroundColor: '#ffffff',
  //   height: height,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   width,
  //   position: 'absolute',
  //   top: 0,
  //   flex: 1,
  // },
  // offlineText: { color: '#666' }

  offlineContainer: {
    // backgroundColor: '#ffffff',
    height,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    width,
    position: 'absolute',
    elevation: 3,
    // top: 30
    flex: 1,
    // backgroundColor:Common.lightGreen,
    // backgroundColor:'#ffffff',
    backgroundColor:'#f8fafc',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  offlineTextHeader: { color: '#697982', fontWeight:'bold' },
  offlineText: { color: '#697982' },
  paragraph: {
    textAlign: 'center',
    width:wp('60%'),
    height:hp('20%')
    // width: windowWidth * 0.75 - 100,
    // height: windowHeight * 0.33 - 100
  },

});

export default OfflineNotice;