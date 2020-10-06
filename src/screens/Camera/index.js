import React, {PureComponent} from 'react';
import {View, Modal} from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Text,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  // Text,
} from 'native-base';
import Home from '../Home';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

class Camera extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      path: '',
      modalVisible: false,
      imageUri: '',
    };
  }

  getImageSource(params) {
    // Toast.show('Nama Dokumen', value.name_item);
    // ToastAndroid.show('Please write some question', ToastAndroid.SHORT);
    // console.log('Hello gaes', params.name_item);
    if ((this.state.modalVisible = true)) {
      this.setState({
        path: null,
        modalVisible: false,
      });
      // this.props.navigation.state.params.returnData(params);
      // this.props.navigation.goBack();

      // await AsyncStorage.setItem('picture_source', params);
      // this.props.navigation.setParams(params)
      // this.props.navigation.goBack();

      this.props.navigation.push('Tambah', params);
      
      // this.props.navigation.goBack('Home');
      // console.log('Modal', this.state.modalVisible);
    } else {
      // this.props.navigation.push('Tambah', params);
    }
  }
  goBack() {
    // (this.state.path != null)
    if ((this.state.modalVisible = true)) {
      this.setState({
        path: null,
        modalVisible: false,
      });
      console.log('Modal', this.state.modalVisible);
    } else {
      this.props.navigation.goBack(null);
    }
    // ? this.setState({
    //     path: null,
    //     modalVisible: false,
    //   })
    // : this.props.navigation.goBack(null);
  }

  render() {
    // var imageURI =
    //   'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';
    console.log('Hasil image uri', this.state.imageUri);
    return (
      <Container>
        <View>
          <Modal
            visible={this.state.modalVisible}
            // onRequestClose
            onRequestClose={() => {
              this.setState({
                modalVisible: false,
              });
              // Alert.alert("Modal has been closed.");
            }}>
            {/* <Text>Apaaaaa</Text> */}

            <Image
              source={{uri: this.state.path}}
              style={{width: width, height: height}}
            />

            <View
              style={{
                margin: -100,
                flexDirection: 'row',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                // marginVertical:20,
              }}>
              <Button
                block
                // info
                style={{fontSize: 14, width: 100, height: 40}}
                onPress={() => this.goBack()}>
                <Text style={{color: 'white'}}>Batal</Text>
              </Button>

              <Button
                block
                // info
                style={{fontSize: 14, width: 100, height: 40}}
                // onPress={() => this.props.navigation.navigate('Home')}
                onPress={() => this.getImageSource(this.state.path)}
                // onPress={()=>this.props.navigation.push('Home')}
              >
                <Text style={{color: 'white'}}>Lanjut</Text>
              </Button>
            </View>
          </Modal>
        </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={this.takePicture.bind(this)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </Container>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        type: true,
      };
      const data = await this.camera.takePictureAsync(options);
      // console.log('DATA', data);
      // this.setState({path: data.uri, modalVisible: true});

      this.setState({
        path: 'data:image/jpeg;base64,' + data.base64,
        modalVisible: true,
        imageUri: data.uri,
      });
      // console.log("URI",data.uri);
      // this.onClickSnap(data);
    }
  };

  // onClickSnap(data) {
  //   this.setState({
  //     modalVisible: true,
  //     imageUri: data.base64,
  //     // imageUri: 'data:image/jpeg;base64,' + data.base64
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
