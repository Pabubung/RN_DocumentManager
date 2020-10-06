import * as React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';

import {
  Container,
  Body,
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Icon,
  Right,
  H1,
  Thumbnail,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';

const COVERS = [
  require('../../image/album-art-01.jpg'),
  require('../../image/album-art-02.jpg'),
  require('../../image/album-art-03.jpg'),
  // require('../../image/album-art-04.jpg'),
  // require('../../image/album-art-05.jpg'),
  // require('../../image/album-art-06.jpg'),
  // require('../../image/album-art-07.jpg'),
  // require('../../image/album-art-08.jpg'),
  // require('../../image/album-art-09.jpg'),
  // require('../../image/album-art-10.jpg'),
  // require('../../image/album-art-11.jpg'),
  // require('../../image/album-art-12.jpg'),
  // require('../../image/album-art-13.jpg'),
  // require('../../image/album-art-14.jpg'),
  // require('../../image/album-art-15.jpg'),
  // require('../../image/album-art-16.jpg'),
  // require('../../image/album-art-17.jpg'),
  // require('../../image/album-art-18.jpg'),
  // require('../../image/album-art-19.jpg'),
  // require('../../image/album-art-20.jpg'),
  // require('../../image/album-art-21.jpg'),
  // require('../../image/album-art-22.jpg'),
  // require('../../image/album-art-23.jpg'),
  // require('../../image/album-art-24.jpg'),
];

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

// ImagePicker.showImagePicker(options, response => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   } else {
//     const source = {uri: response.uri};

//     // You can also display the image using data:
//     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//     this.setState({
//       avatarSource: source,
//     });
//   }
// });

// // Launch Camera:
// ImagePicker.launchCamera(options, response => {
//   // Same code as in above section!
// });

// // Open Image Library:
// ImagePicker.launchImageLibrary(options, response => {
//   // Same code as in above section!
// });

const {height, width} = Dimensions.get('window');
class Picture extends React.Component {
  // static navigationOptions = {
  //   headerShown: false,
  // };
  state = {
    photo: null,
    modalVisible: false,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
        this.setModalVisible(true);
      }
    });
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {photo} = this.state;
    return (
      <Container>
        <View
          style={{flexDirection: 'row'}}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>


          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <H1 style={{fontSize: 22}}>Document Manager</H1>
            
                <View
                style={{alignContent: 'center'}}>
                  {photo && (
                    <Image
                      source={{uri: photo.uri}}
                      style={{width: width, height: 300}}
                    />
                  )}
                </View>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Button><Text>Upload</Text></Button>  
                  {/* <Text>Hide Modal</Text> */}
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <Button
            style={{padding: 20, margin: 5}}
            onPress={this.handleChoosePhoto}>
            <Text>Pilih Gambar</Text>
          </Button>
          <Button
            style={{padding: 20, margin: 5}}
            onPress={this.handleChoosePhoto}
          >
            <Text>Ambil Foto</Text>
          </Button>
        </View>

        <ScrollView>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../image/album-art-01.jpg')}
            />
            <Image
              style={{width: 100, height: 100}}
              source={require('../../image/album-art-02.jpg')}
            />
            <Image
              style={{width: 100, height: 100}}
              source={require('../../image/album-art-03.jpg')}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ...Platform.select({
    web: {
      content: {
        //   display: 'grid' as 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      item: {
        width: '100%',
      },
    },
    default: {
      content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
      },
    },
  }),
  photo: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: '100%',
  },
});

export default Picture;
