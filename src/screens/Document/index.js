import * as React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  Modal,
  TouchableHighlight,
  Alert,
  ToastAndroid,
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
  Toast,
} from 'native-base';

import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import addDocument from './addDocument';

const {height, width} = Dimensions.get('window');
class Document extends React.Component {
  // static navigationOptions = {
  //   headerShown: false,
  // };
  
  state = {
    data: {},
    picture: [],
    document: [],
    photo: null,
    modalVisible: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_DOCUMENT_LIST',
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.documentData != undefined) {
      this.setState({
        document: nextProps.documentData.document.data,
      });
      // console.log("Tes Picture", this.state.picture);
    }
  }

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

  openDetail=(value)=>{
    // Toast.show('Nama Dokumen', value.name_item);
    // ToastAndroid.show('Please write some question', ToastAndroid.SHORT);
    // console.log("Hello gaes", value.name_item);
  }

  render() {
    const {document,photo} = this.state;
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
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <Button
            style={{padding: 20, margin: 5}}
            // onPress={this.handleChoosePhoto}
            onPress={() => this.props.navigation.push('Tambah')}
            >
            <Text>Tambah Document</Text>
          </Button>
          
        </View>

        <ScrollView>
          <View style={{margin: 10}}>
            {typeof document != undefined
              ? document.map((source, i) => (
                  <Card key={i}
                  // onPress={()=>openDetail(i)}
                  // onPress={()=>this.props.navigation.push('Detal')}
                  >
                    <CardItem>
                      <View>
                        <Image
                          style={{
                            width: 100,
                            height: 100,
                            borderWidth: 1,
                          }}
                          source={{uri: source.picture_source}}
                        />
                      </View>
                      <View>
                        <Body style={{marginHorizontal: 20}}>
                          <Text>{source.name_item}</Text>
                          <Text note>{source.receiver_item}</Text>
                        </Body>
                        <View
                          style={{
                            height: 40,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center',
                          }}>
                        </View>
                      </View>
                    </CardItem>
                  </Card>
                ))
              : null}
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

const mapStateToProps = state => ({
  documentData: state.documentData,
});
export default connect(mapStateToProps)(Document);
