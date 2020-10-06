import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import { Input } from 'react-native-elements';
import {
  Container,
  Title,
  Content,
  Button,
  Icon,
  // Text,
  Left,
  Right,
  Body,
  List,
  Thumbnail,
  ListItem,
  Grid,
  Row,
  Footer,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  Toast,
} from 'native-base';

import {
  // Button,
  ToastAndroid,
  View,
  StatusBar,
  Image,
  Share,
  AsyncStorage,
  TextInput,
  Dimensions,
  TouchableOpacity,
  // Modal,
  StyleSheet,
  Text,
  Picker,
  BackHandler,
  Modal,
} from 'react-native';
// import Modal from 'react-native-modal';
import {Dropdown} from 'react-native-material-dropdown';
import ImgToBase64 from 'react-native-image-base64';
import LinearGradient from 'react-native-linear-gradient';
import {RNCamera} from 'react-native-camera';
import {
  Dialog,
  ProgressDialog,
  ConfirmDialog,
} from 'react-native-simple-dialogs';

import ApiCaller from '../../setting/apiDocument';
import Home from '../Home';
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

class Detail extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      questionExist: false,
      text: '',
      accessToken: '',

      date_item: 'Pilih Tanggal',
      type_item: '',
      name_item: '',
      additional_information: '',
      picture_source: '',
      current_location_item: '',
      receiver_item: '',

      dateString: '',
      calendarVisible: false,

      disableButton: true,

      cekInputTanggal: false,
      cekInputTipe: false,
      cekInputNama: false,
      cekInputLokasi: false,
      cekInputPenerima: false,
      cekInputKeterangan: false,
      cekInputGambar: false,

      InputTanggalEmpty: false,
      InputTipeEmpty: false,

      InputNamaEmpty: false,
      InputLokasiEmpty: false,
      InputPenerimaEmpty: false,
      InputKeteranganEmpty: false,
      InputGambarEmpty: false,

      // picture_source: this.props.navigation.state.params,
      path: '',
      modalVisibleImage: false,
      modalVisibleCamera: false,
      imageUri: '',
      dataImage: '',

      userfileUri: '',
      userfileType: '',
      userfileFileName: '',
    };
  }

  // AWAL KAMERA
  getImageSource(params) {
    if ((this.state.modalVisibleImage = true)) {
      this.setState({
        // path: null,
        modalVisibleImage: false,
        modalVisibleCamera: false,
        picture_source: params,
        InputGambarEmpty: false,
        cekInputGambar: true,
      });
      // this.props.navigation.navigate('Tambah', params);
    } else {
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        // base64: true,
        type: true,
      };
      const data = await this.camera.takePictureAsync(options);
      // console.log('DATA', data);
      // this.setState({path: data.uri, modalVisible: true});

      this.setState({
        // path: 'data:image/jpeg;base64,' + data.base64,
        modalVisibleImage: true,
        imageUri: data.uri,
        dataImage: data,

        userfileUri: data.uri,
        userfileType: 'image/jpeg',
        userfileFileName: data.uri.replace(/^.*[\\\/]/, ''),
      });
      // console.log("URI",data.uri);
      // this.onClickSnap(data);
    }
  };
  // AKHIR KAMERA

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      // console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
        ImgToBase64.getBase64String(response.uri)
          .then(base64String =>
            this.setState({
              // picture_source: 'data:image/jpeg;base64,' + base64String,
              picture_source:
                'data:' + response.type + ';base64,' + base64String,
              cekInputGambar: true,
              InputGambarEmpty: false,
              dataImage: response,

              userfileUri: response.uri,
              userfileType: response.type,
              userfileFileName: response.fileName,
              // var filename = fullPath.replace(/^.*[\\\/]/, '')
              // uri.substring(uri.lastIndexOf('/') + 1, uri.length())
            }),
          )
          .catch(err => Toast(err));
      }
    });
  };

  onCheckInputTypeItem(value) {
    console.log('Value', value);
    this.setState({
      type_item: value.trim(),
    });

    if (value !== '') {
      this.setState({
        cekInputTipe: true,
        InputTipeEmpty: false,
      });
    } else {
      this.setState({
        cekInputTipe: false,
        InputTipeEmpty: true,
      });
    }
  }

  onCheckInputPictureItem(value) {
    // console.log('Value', value);
    this.setState({
      imageUri: value.trim(),
    });

    if (value !== '') {
      this.setState({
        cekInputGambar: true,
        InputGambarEmpty: false,
      });
    } else {
      this.setState({
        cekInputGambar: false,
        InputGambarEmpty: true,
      });
    }
  }

  onCheckInputDateItem(value) {
    // console.log('Value', value);
    this.setState({
      date_item: value.trim(),
    });

    if (this.state.date_item !== 'Pilih Tanggal') {
      this.setState({
        cekInputTanggal: true,
        // disableButton:false,
        InputTanggalEmpty: false,
      });
    } else {
      this.setState({
        cekInputTanggal: false,
        InputTanggalEmpty: true,
      });
    }
  }

  onCheckInputNameItem(value) {
    this.setState({
      name_item: value.trim(),
    });

    if (value !== '') {
      this.setState({
        cekInputNama: true,
        // disableButton:false,
        InputNamaEmpty: false,
      });
    } else {
      this.setState({
        cekInputNama: false,
        InputNamaEmpty: true,
      });
    }
  }

  onCheckInputCurrentLocationItem(value) {
    this.setState({
      current_location_item: value.trim(),
    });

    if (value !== '') {
      this.setState({
        cekInputLokasi: true,
        // disableButton:false,
        InputLokasiEmpty: false,
      });
    } else {
      this.setState({
        cekInputLokasi: false,
        InputLokasiEmpty: true,
      });
    }
  }

  onCheckInputReceiverItem(value) {
    this.setState({
      receiver_item: value.trim(),
    });

    if (value !== '') {
      this.setState({
        cekInputPenerima: true,
        // disableButton:false,
        InputPenerimaEmpty: false,
      });
    } else {
      this.setState({
        cekInputPenerima: false,
        InputPenerimaEmpty: true,
      });
    }
  }

  // onCheckInputAdditionalInformationItem(value){
  //   this.setState({
  //     additional_information: value.trim()
  //   })

  //   if(this.state.additional_information !== ""){
  //     this.setState({
  //       cekInputKeterangan: true,
  //       // disableButton:false,
  //       InputKeteranganEmpty:false,
  //     })
  //   }else if(this.state.name_item !== "" && this.state.current_location_item !== "" && this.state.receiver_item !== "" && this.state.additional_information !== "" ){
  //     this.setState({
  //       disableButton:false,
  //     })
  //   }else{

  //   }
  // }

  onCheckSubmit() {
    let {
      cekInputNama,
      cekInputLokasi,
      cekInputPenerima,
      cekInputTipe,
      cekInputTanggal,
      cekInputKeterangan,
      cekInputGambar,

      date_item,
      type_item,
      name_item,
      current_location_item,
      receiver_item,
      additional_information,
      picture_source,
    } = this.state;

    if (
      (cekInputNama == true) &
      (cekInputLokasi == true) &
      (cekInputPenerima == true) &
      (cekInputTipe == true) &
      (cekInputTanggal == true) &
      (cekInputGambar == true)
    ) {
      ToastAndroid.show('Sudah Lengkap', ToastAndroid.SHORT);
      this.onPressSubmit();
    } else {
      ToastAndroid.show(
        'Silahkan Mengisi Form, Pastikan Data Sudah Lengkap!',
        ToastAndroid.SHORT,
      );
      this.onCheckInputDateItem(date_item);
      this.onCheckInputTypeItem(type_item);
      this.onCheckInputNameItem(name_item);
      this.onCheckInputCurrentLocationItem(current_location_item);
      this.onCheckInputReceiverItem(receiver_item);
      this.onCheckInputPictureItem(picture_source);
    }
  }
  setModalVisible = () => {
    this.setState({
      calendarVisible: !this.state.calendarVisible,
    });
  };

  goBack() {
    navigation.goBack('Login');
  }

  handleBackButtonClick() {
    // this.props.navigation.navigate('ThirdPage');

    // To popup the default screen
    // this.props.navigation.goBack(null);

    // To exit from your App
    BackHandler.exitApp();
    // Returning true/false is described below
    // return true;
  }

  // UNSAFE_componentWillReceiveProps(next) {
  //   if (next.questionData.question.exist == true) {
  //     this.setState({
  //       questionExist: true,
  //     });
  //   }
  // }

  // UNSAFE_componentWillMount() {
  //   AsyncStorage.getItem('userData')
  //     .then(data => {
  //       if (JSON.parse(data)) {
  //         this.setState({
  //           accessToken: JSON.parse(data).token,
  //           audienceid: JSON.parse(data).audienceid,
  //         });
  //       }
  //     })
  //     .done();
  // }

  UNSAFE_componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  UNSAFE_componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  handleBackButtonPressAndroid = () => {
    this.props.navigation.goBack(null);
    return true;
    // if (!this.props.navigation.isFocused()) {
    //   // The screen is not focused, so don't do anything
    //   return false;
    // }

    // if (this.isSelectionModeEnabled()) {
    //   this.disableSelectionMode();

    //   // We have handled the back button
    //   // Return `true` to prevent react-navigation from handling it
    //   return true;
    // } else {
    //   return false;
    // }
  };

  // componentWillUnmount() {
  //   // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  // }

  // handleBackPress = () => {
  //   this.goBack(); // works best when the goBack is async
  //   return true;
  // };

  // onPressClose() {
  //   this.props.navigation.goBack(null);
  // }
  onPressDay = day => {
    this.setState({
      calendarVisible: !this.state.calendarVisible,
      date_item: day.dateString,
      InputTanggalEmpty: false,
      cekInputTanggal: true,
    });
  };

  onPressSubmit() {
    // console.log('date item', this.state.date_item);
    // console.log('type item', this.state.type_item);
    // console.log('name item', this.state.name_item);
    // console.log('additional information', this.state.additional_information);
    // console.log('picture source', this.state.picture_source);
    // console.log('current location item', this.state.current_location_item);
    // console.log('receiver item', this.state.receiver_item);
    // AsyncStorage.getItem('userData')
    //   .then(data => {
    //     if (this.state.text == '') {
    //       ToastAndroid.show('Please write some question', ToastAndroid.SHORT);
    //       return;
    //     }

    // const image = this.state.dataImage;

    const date_item = this.state.date_item;
    const type_item = this.state.type_item;
    const name_item = this.state.name_item;
    const additional_information = this.state.additional_information;
    // const userfile= this.state.dataImage;
    const current_location_item = this.state.current_location_item;
    const receiver_item = this.state.receiver_item;
    const formData = new FormData();
    formData.append('date_item', date_item);
    formData.append('type_item', type_item);
    formData.append('name_item', name_item);
    formData.append('additional_information', additional_information);
    formData.append('userfile', {
      uri: this.state.userfileUri,
      // type: 'image/jpeg',
      type: this.state.userfileType,
      name: this.state.userfileFileName,
    });
    formData.append('current_location_item', current_location_item);
    formData.append('receiver_item', receiver_item);

    // const data = {
    //   date_item: this.state.date_item,
    //   type_item: this.state.type_item,
    //   name_item: this.state.name_item,
    //   additional_information: this.state.additional_information,
    //   userfile: this.state.dataImage,
    //   current_location_item: this.state.current_location_item,
    //   receiver_item: this.state.receiver_item,
    // };

    ApiCaller(
      'insertDocument',
      'POST',
      null,
      formData,
      // {
      //   date_item: this.state.date_item,
      //   type_item: this.state.type_item,
      //   name_item: this.state.name_item,
      //   additional_information: this.state.additional_information,
      //   picture_source: this.state.dataImage,
      //   current_location_item: this.state.current_location_item,
      //   receiver_item: this.state.receiver_item,
      // }
    ).then(response => {
      console.log('Respon', response.status);
      console.log('Respon', response.message);
      if (response.status === true) {
        ToastAndroid.show('Document has been submit', ToastAndroid.SHORT);
        this.props.navigation.goBack(null);
      } else {
        ToastAndroid.show('Document failed to submit', ToastAndroid.SHORT);
      }
    });
    // })
    // .done();
  }

  onValueChange(value) {
    this.setState({
      type_item: value,
    });
  }
  render() {
    const navigation = this.props;
    const {document, photo, calendarVisible, picture_source} = this.state;
    const {height, width} = Dimensions.get('window');
    let data = [
      {
        value: 'Barang',
      },
      {
        value: 'Dokumen',
      },
    ];
    // console.log('Data image', this.state.dataImage);
    // console.log('Filename', this.state.userfileFileName);
    

    // console.log("Picture snap", this.props.navigation.state.params);
    return (
      // <View>

      <View style={styles.container}>
        <LinearGradient
          // colors={['#2974FA', '#38ABFD', '#43D4FF']}
          colors={['#2980B9', '#6DD5FA']}
          style={styles.gradient}>
          {/* <Container style={styles.container}> */}
          <Content>
            <View>
              <Modal
                visible={this.state.modalVisibleImage}
                // onRequestClose
                onRequestClose={() => {
                  this.setState({
                    modalVisibleImage: false,
                    modalVisibleCamera: true,
                  });
                }}>
                <Image
                  source={{uri: this.state.userfileUri}}
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
                    onPress={() =>
                      // this.goBack()
                      this.setState({
                        modalVisibleImage: false,
                        modalVisibleCamera: true,
                      })
                    }>
                    <Text style={{color: 'white'}}>Batal</Text>
                  </Button>

                  <Button
                    block
                    // info
                    style={{fontSize: 14, width: 100, height: 40}}
                    // onPress={() => this.props.navigation.navigate('Home')}
                    onPress={() => this.getImageSource(this.state.userfileUri)}
                    // onPress={()=>this.props.navigation.push('Home')}
                  >
                    <Text style={{color: 'white'}}>Lanjut</Text>
                  </Button>
                </View>
              </Modal>
            </View>

            <View>
              <Modal
                visible={this.state.modalVisibleCamera}
                // onRequestClose
                onRequestClose={() => {
                  this.setState({
                    modalVisibleCamera: false,
                  });
                }}>
                <RNCamera
                  ref={ref => {
                    this.camera = ref;
                  }}
                  style={{width: width, height: height}}
                  // style={styles.preview}
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
                          {/* <Text style={{fontSize: 14}}> SNAP </Text> */}

                          <Icon
                            name="camera"
                            type="Feather"
                            style={{
                              // margin: 10,
                              color: 'white',
                              fontSize: 30,
                              // paddingRight: 13,
                            }}></Icon>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                </RNCamera>
              </Modal>
            </View>

            <View>
              <Modal
                // isVisible={this.state.calendarVisible}

                visible={this.state.calendarVisible}
                // onRequestClose
                onRequestClose={() => {
                  this.setState({
                    calendarVisible: false,
                  });
                }}
                // animationType="slide"
                // transparent={true}
                // visible={calendarVisible}
                // onRequestClose={() => {
                //   Alert.alert('Modal has been closed.');
                // }}
              >
                <View
                // style={{flex: 1}}
                >
                  <Calendar
                    onDayPress={day => {
                      this.onPressDay(day);
                    }}
                  />
                </View>
              </Modal>

              <View
                style={{
                  paddingHorizontal: 20,
                }}>
                {/* <View
                  style={
                    // this.state.date_item == 'Pilih Tanggal'
                    //   ? styles.boxdate
                    //   :
                    styles.boxdate
                  }>
                  <Label style={{fontWeight: 'bold'}}>Tanggal : </Label>
                  <Input
                    editable={false}
                    placeholder={this.state.date_item}
                  />
                  <TouchableOpacity onPress={this.setModalVisible}>
                    <Icon
                      name="calendar"
                      type="Feather"
                      style={{color: '#000000', fontSize: 24}}></Icon>
                  </TouchableOpacity>
                </View> */}

                <View style={styles.boxgeneralinformation}>
                  <Label style={{fontWeight: '700', fontSize: 24}}>
                    FORM INPUT
                  </Label>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Label style={{fontWeight: '500', fontSize: 18}}>
                      Tanggal
                    </Label>
                    <View
                      style={
                        this.state.InputTanggalEmpty
                          ? styles.pickerdatefalse
                          : styles.pickerdate
                      }>
                      <Text style={{paddingLeft: 8, fontSize: 16}}>
                        {this.state.date_item}
                      </Text>
                      <TouchableOpacity onPress={this.setModalVisible}>
                        <Icon
                          name="calendar"
                          type="Feather"
                          style={{
                            color: 'grey',
                            fontSize: 20,
                            paddingRight: 13,
                          }}></Icon>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Label style={{fontWeight: '500', fontSize: 18}}>
                      Tipe Item
                    </Label>
                    <View
                      style={
                        this.state.InputTipeEmpty
                          ? styles.pickerfalse
                          : {
                              borderBottomColor: 'grey',
                              borderBottomWidth: 2,
                            }
                      }>
                      <Picker
                        // enabled={false}
                        mode={'dropdown'}
                        selectedValue={this.state.type_item}
                        style={{
                          height: 40,
                          width: 200,
                          borderRadius: 8,
                          borderWidth: 2,
                        }}
                        // onValueChange={this.onValueChange.bind(this)}
                        onValueChange={value =>
                          this.onCheckInputTypeItem(value)
                        }>
                        <Picker.Item label="Pilih Tipe Item" value="" />
                        <Picker.Item label="Barang" value="Barang" />
                        <Picker.Item label="Dokumen" value="Dokumen" />
                      </Picker>
                    </View>
                  </View>

                  <Text style={styles.text}>Nama Item</Text>
                  <TextInput
                    style={
                      this.state.InputNamaEmpty
                        ? styles.textInputFalse
                        : styles.textInput
                    }
                    returnKeyLabel="Nama item"
                    placeholder="Tuliskan nama item"
                    onChangeText={value => this.onCheckInputNameItem(value)}
                  />

                  <Text style={styles.text}>Lokasi Terkini</Text>
                  <TextInput
                    style={
                      this.state.InputLokasiEmpty
                        ? styles.textInputFalse
                        : styles.textInput
                    }
                    placeholder="Tuliskan lokasi terkini"
                    // onChangeText={value =>
                    //   this.setState({current_location_item: value})
                    // }
                    onChangeText={value =>
                      this.onCheckInputCurrentLocationItem(value)
                    }
                  />

                  <Text style={styles.text}>Nama Penerima</Text>
                  <TextInput
                    // style={styles.textInput}
                    style={
                      this.state.InputPenerimaEmpty
                        ? styles.textInputFalse
                        : styles.textInput
                    }
                    placeholder="Tuliskan nama penerima"
                    // onChangeText={value =>
                    //   this.setState({receiver_item: value})
                    // }
                    onChangeText={value => this.onCheckInputReceiverItem(value)}
                  />

                  <Text style={styles.text}>Keterangan Tambahan</Text>
                  {/* <Text note >bila diperlukan</Text> */}
                  <Textarea
                    visible-password
                    rowSpan={5}
                    bordered
                    placeholder="Tuliskan Keterangan"
                    onChangeText={value =>
                      this.setState({additional_information: value})
                    }
                    autoCorrect={false}
                    style={{
                      textAlignVertical: 'top',
                      marginTop: 5,
                      height: 80,
                      backgroundColor: '#f5f2f2',
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      padding: 0,
                      marginTop: 20,
                      // backgroundColor: '#f5f2f2',
                      backgroundColor: '#fffff',
                    }}
                    // onPress={this.handleChoosePhoto}
                  >
                    <Text
                      style={
                        this.state.InputGambarEmpty
                          ? {
                              fontWeight: 'bold',
                              fontSize: 18,
                              color: '#c70831',
                            }
                          : {
                              fontWeight: 'bold',
                              fontSize: 18,
                              color: '#87cefa',
                            }
                      }>
                      Pilih Gambar
                    </Text>
                    {/* <Icon
                    name="calendar"
                    type="Feather"
                    style={{color: '#000000', fontSize: 26}}></Icon> */}
                  </TouchableOpacity>
                  <View style={{alignContent: 'center'}}>
                    {picture_source !== '' ? (
                      <Image
                        source={{uri: picture_source}}
                        style={{width: 100, height: 100}}
                      />
                    ) : (
                      <Text>tidak ada gambar dipilih**</Text>
                    )}
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      // onPress={this.setModalVisible}
                      onPress={
                        () =>
                          this.setState({
                            modalVisibleCamera: true,
                            modalVisibleImage: false,
                          })
                        // this.props.navigation.navigate('Camera')
                      }>
                      <Icon
                        name="camera"
                        type="Feather"
                        style={{
                          margin: 10,
                          color: 'black',
                          fontSize: 24,
                          paddingRight: 13,
                        }}></Icon>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleChoosePhoto}>
                      <Icon
                        name="image"
                        type="Feather"
                        style={{
                          margin: 10,
                          color: 'black',
                          fontSize: 24,
                          paddingRight: 13,
                        }}></Icon>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* <View
                  style={{
                    marginTop: 15,
                    padding: 20,
                    width: '100%',
                    backgroundColor: 'white',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Keterangan Tambahan</Text>
                  <Textarea
                    visible-password
                    rowSpan={5}
                    bordered
                    placeholder="Tuliskan Keterangan"
                    onChangeText={value =>
                      this.setState({additional_information: value})
                    }
                    autoCorrect={false}
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#ececec',
                      textAlignVertical: 'top',
                      padding: 8,
                    }}
                  />
                </View>
              */}
              </View>

              <Row style={styles.viewbutton}>
                {/* <Button
                    onPress={() => this.onPressClose()}
                    light
                    style={styles.button}>
                    <Text>Close</Text>
                  </Button> */}

                <Button
                  // onPress={() => this.onPressSubmit()}
                  onPress={() => this.onCheckSubmit()}
                  // success
                  // disabled={true}
                  style={
                    // this.state.disableButton
                    //   ? styles.buttondisable
                    //   :
                    styles.button
                  }>
                  <Text>Submit</Text>
                </Button>
              </Row>

              {/* <View >
                <Button
                  block
                  info
                  style={styles.button}
                  onPress={() => {
                    this.onPressEdit(detail);
                  }}>
                  <Text>{this.state.buttoneditsave}</Text>
                </Button>

                <Button
                  block
                  danger
                  style={styles.button}
                  onPress={() => {
                    this.onPressHapus(detail);
                  }}>
                  <Text>Hapus</Text>
                </Button>
              </View> */}
            </View>
          </Content>
          {/* </Container> */}
        </LinearGradient>
      </View>

      // </View>
    );
  }
}

const shadow = {
  shadowColor: '#30C1DD',
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {width: 0, height: 4},
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#f2f2f2',
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    resizeMode: 'stretch',
  },

  // boxdate: {
  //   marginTop: 50,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 15,
  //   marginBottom: 20,
  //   borderRadius: 8,
  //   backgroundColor: 'white',

  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },

  boxgeneralinformation: {
    marginTop: 50,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pickerdate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: 200,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },

  pickerdatefalse: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: 200,
    borderBottomColor: '#c70831',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  pickerfalse: {
    borderBottomColor: '#c70831',
    borderBottomWidth: 2,
  },
  textInput: {
    backgroundColor: '#f5f2f2',
    marginTop: 5,
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderColor: '#2980B9',
    borderWidth: 0,
  },

  textInputFalse: {
    backgroundColor: '#f5f2f2',
    marginTop: 5,
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderColor: '#c70831',
    borderWidth: 1.5,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  viewbutton: {
    // flex: 1,
    // padding: 15,
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#95139e',

    flexDirection: 'column',
    // flexWrap: 'wrap',
    // flex: 1,
    justifyContent: 'center',
    borderWidth: 0,
    width: '100%',
    height: 50,
    borderRadius: 4,
  },
  buttondisable: {
    opacity: 0.4,
    backgroundColor: '#95139e',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // flex: 1,
    justifyContent: 'center',
    borderWidth: 0,
    width: '100%',
    height: 50,
    borderRadius: 4,
  },
  // headerTextStyle: {
  //   color: Common.whiteColor,
  //   fontWeight: 'bold',
  // },
  headerContainerStyle: {
    flex: 1,
    margin: 5,
  },
  viewWrapper: {
    flex: 9,
  },
  viewSubheaderTab: {
    padding: 15,
    paddingLeft: 25,
    // backgroundColor: Common.lightGray,
    backgroundColor: '#f2f2f2',
  },
  viewSubheaderTabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  ActivIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ActivIndicatorHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  aboutText: {
    padding: 0,
    paddingTop: 0,
    paddingRight: 0,
  },
  capture: {
    flex: 0,
    marginTop: height - 100,
    // backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    // margin: 20,
    // position:"absolute",
    left: 0,
    // bottom:0,
    // right:0,
  },
});

// const mapStateToProps = state => ({
//   evaluationData: state.evaluationData,
// });

export default Detail;
