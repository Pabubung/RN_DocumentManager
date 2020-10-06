import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
  Picker,
  Image,
} from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Content,
} from 'native-base';
import axios from 'axios';
import ApiCaller from '../../setting/apiDocumentDelete';
import {connect} from 'react-redux';
import {Dropdown} from 'react-native-material-dropdown';
import fetch from 'isomorphic-fetch';
import ApiCallerUpdate from '../../setting/apiDocumentUpdate';
// import ApiCallerUpdate from '../../setting/apiDocument';
class Detail extends React.Component {
  state = {
    // detail: this.props.navigation.state.params,
    detail: [],
    id_item: '',
    buttoneditsave: 'Edit',
    editable: false,

    type_item: '',
    name_item: '',
    receiver_item: '',
    current_location_item: '',
    additional_information: '',
    picture_source: '',
  };

  onPressEdit(params) {
    // this.setState({
    //   buttoneditsave: 'Save',
    //   editable: true,
    // });

    const body = {
      id_item: params.id_item,
    };
    console.log('Cek body', body);

    if (this.state.editable === true) {
      // const formData = {
      //   id_item: params.id_item,
      //   date_item: params.date_item,
      //   type_item: params.type_item,
      //   name_item: params.name_item,
      //   additional_information: params.additional_information,
      //   picture_source: params.picture_source,
      //   current_location_item: params.current_location_item,
      //   receiver_item: params.receiver_item,

      // };
      // // function
      // const encodeFormData = data => {
      //   return Object.keys(data)
      //     .map(
      //       key =>
      //         encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      //     )
      //     .join('&');
      // };
      console.log('Kirim');

      console.log('date item', this.state.date_item);
      console.log('type item', this.state.type_item);
      console.log('name item', this.state.name_item);
      console.log('additional information', this.state.additional_information);
      // console.log('picture source', this.state.picture_source);
      console.log('current location item', this.state.current_location_item);
      console.log('receiver item', this.state.receiver_item);

      ApiCallerUpdate(
        // 'updateDocument', 'put', null, {
        params.id_item,
        params.date_item,
        this.state.type_item,
        this.state.name_item,
        this.state.additional_information,
        this.state.picture_source,
        this.state.current_location_item,
        this.state.receiver_item,

        //  encodeFormData(formData)
        // {
        //   date_item: params.date_item,
        //   type_item: params.type_item,
        //   name_item: params.name_item,
        //   additional_information: params.additional_information,
        //   picture_source: params.picture_source,
        //   current_location_item: params.current_location_item,
        //   receiver_item: params.receiver_item,
        //   id_item: params.id_item,
        // }
      ).then(response => {
        console.log('Respon', response.status);
        console.log('Message', response.message);
        console.log('ID Api', response.id_item);
        if (response.status === true) {
          ToastAndroid.show('Document has been update', ToastAndroid.SHORT);
          // this.props.navigation.goBack(null);
          this.props.navigation.pop(null);
        } else {
          ToastAndroid.show('Document failed to update', ToastAndroid.SHORT);
        }
      });
    } else {
      console.log('Prett');
      this.setState({
        buttoneditsave: 'Save',
        editable: true,

        name_item: params.name_item,
        type_item: params.type_item,
        date_item: params.date_item,
        receiver_item: params.receiver_item,
        current_location_item: params.current_location_item,
        additional_information: params.additional_information,
        picture_source: params.picture_source,
      });
    }
  }
  onPressHapus(params) {
    const method = 'GET';
    const API_URL = 'https://rndocument.com/api/document';
    const body = {
      id_item: params.id_item,
      picture_name: params.picture_source,
    };
    console.log('Cek body', body);
    // return axios.delete(API_URL, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   data: {
    //     'id_item': params.id_item
    //   }
    // })
    // .then(
    //   response => {
    //     console.log('Status', response.status);
    //   },
    //   error => {
    //     console.log('Coba lagi', error);
    //   },
    // );

    ApiCaller(
      params.id_item,
      params.picture_source.replace(/^.*[\\\/]/, ''),
      'delete',
    ).then(response => {
      console.log('Respon', response.status);
      console.log('Respon', response.message);
      if (response.status === true) {
        ToastAndroid.show('Document has been delete', ToastAndroid.SHORT);
        this.props.navigation.goBack(null);
      } else {
        ToastAndroid.show('Document failed to delete', ToastAndroid.SHORT);
      }
    });
  }

  UNSAFE_componentWillMount() {
    this.setState({
      detail: this.props.navigation.state.params,
      picture_source: this.props.navigation.state.params.picture_source,
    });
    this.setState({
      name_item: this.state.detail.name_item,
    });
  }

  onCheckInputTypeItem(value) {
    // console.log('Value', value);
    this.setState({
      type_item: value.trim(),
    });

    // if (value !== '') {
    //   this.setState({
    //     cekInputTipe: true,
    //     InputTipeEmpty: false,
    //   });
    // } else {
    //   this.setState({
    //     cekInputTipe: false,
    //     InputTipeEmpty: true,
    //   });
    // }
  }

  render() {
    const {detail, editable, name_item, picture_source} = this.state;
    let data = [
      {
        value: 'Barang',
      },
      {
        value: 'Dokumen',
      },
    ];
    console.log('Picture Source', name_item);
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View>
            <View style={styles.boxdate}>
              <Icon
                name="calendar"
                type="Feather"
                style={{color: '#000000', fontSize: 26}}></Icon>
              <Text
                style={{
                  // height: 40,
                  // width: 200,
                  marginLeft: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {detail.date_item}
              </Text>
            </View>

            <View style={styles.boxinformation}>
              <Label style={{fontWeight: '700', fontSize: 20}}>
                FORM DETAIL
              </Label>
              {/* <Label>General information</Label> */}
              {/* <Text style={styles.text}>Tipe Item:</Text>
              <Dropdown
                // style={{padding: 0}}
                placeholder="Pilih Tipe Item"
                data={data}
                value={detail.type_item}
                // onChangeText={value => this.setState({type_item: value})}
              /> */}

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
                    enabled={editable}
                    mode={'dropdown'}
                    // value={detail.type_item}
                    selectedValue={
                      this.state.type_item == ''
                        ? detail.type_item
                        : this.state.type_item
                    }
                    style={{
                      height: 40,
                      width: 200,
                      borderRadius: 8,
                      borderWidth: 2,
                    }}
                    // onValueChange={this.onValueChange.bind(this)}
                    onValueChange={value => this.onCheckInputTypeItem(value)}>
                    {/* <Picker.Item label="Pilih Tipe Item" value="" /> */}
                    <Picker.Item label="Barang" value="Barang" />
                    <Picker.Item label="Dokumen" value="Dokumen" />
                  </Picker>
                </View>
              </View>

              <Text style={styles.text}>Nama Item:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value => this.setState({name_item: value})}
                // value={detail.name_item}
                editable={editable}>
                {detail.name_item}
              </TextInput>

              <Text style={styles.text}>Penerima Item:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value => this.setState({receiver_item: value})}
                // value={detail.receiver_item}
                editable={editable}>
                {detail.receiver_item}
              </TextInput>

              <Text style={styles.text}>Lokasi Terkini Item:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value =>
                  this.setState({current_location_item: value})
                }
                // value={detail.current_location_item}
                editable={editable}>
                {detail.current_location_item}
              </TextInput>

              <Text style={styles.text}>Keterangan Tambahan:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value =>
                  this.setState({additional_information: value})
                }
                // value={detail.additional_information}
                editable={editable}>
                {detail.additional_information}
              </TextInput>

              <View style={{alignContent: 'center'}}>
                {/* {photo && ( */}
                {/* <Image
                  source={{uri: detail.picture_source}}
                  style={{width: 100, height: 100}}
                /> */}
                {/* )} */}

                {picture_source !== '' ? (
                  <Image
                    source={{uri: detail.picture_source}}
                    style={{width: 100, height: 100}}
                  />
                ) : (
                  <Text>tidak ada gambar dipilih**</Text>
                )}
              </View>

              <View style={styles.viewbutton}>
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
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: '#f2f2f2',
  },
  content: {
    padding: 20,
  },
  viewbutton: {
    flex: 1,
    marginVertical: 15,
    // margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxdate: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  boxinformation: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 60,
    marginTop: 10,
  },
  button: {
    width: 150,
    height: 40,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
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
});

export default Detail;