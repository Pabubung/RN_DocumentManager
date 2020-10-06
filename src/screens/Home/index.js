import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Right,
  Icon,
  Button,
  Text,
  Thumbnail,
  Left,
  Body,
  Card,
  CardItem,
  Row,
  H1,
} from 'native-base';
// import styles from './styles';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationEvents} from 'react-navigation';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    document: undefined,
    refreshing: false,
    spinner: true,
  };

  _onRefresh() {
    this.setState({
      refreshing: true,
      document: undefined,
    });
    // wait(2000).

    this.fetchData();
    // .then(() => {
    //   this.setState({refreshing: false});
    // });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        spinner: !this.state.spinner,
      });
    }, 3000);
    this.fetchData();

    // this.props.dispatch({
    //   type: 'FETCH_DOCUMENT_LIST',
    // });
  }
  fetchData() {
    this.props.dispatch({
      type: 'FETCH_DOCUMENT_LIST',
    });
    this.setState({refreshing: false});
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.documentData != undefined) {
      this.setState({
        document: nextProps.documentData.document.data,
        // spinner: nextProps.documentData.document.loading,
      });
    }
  }

  openDetail(params) {
    this.props.navigation.navigate('Detail', params);
  }

  render() {
    const {document, spinner} = this.state;
    if (this.state.document !== undefined) {
      return (
        <View style={styles.container}>
          <NavigationEvents
            // onWillFocus={payload => console.log('will focus', payload)}
            // onDidFocus={payload => console.log('did focus', payload)}
            // onWillBlur={payload => console.log('will blur', payload)}
            // onDidBlur={payload => console.log('did blur', payload)}
            onWillFocus={() => this._onRefresh()}
          />
          {/* <LinearGradient
            colors={['#2974FA', '#38ABFD', '#43D4FF']}
            style={styles.gradient}> */}
          {/* <Container> */}
          <ImageBackground
            resizeMode="cover"
            source={require('../../image/launchscreen.png')}
            style={styles.backgroundImage}>
          {/* <Header
                  noShadow
                  // transparent
                  searchBar
                  // style={{backgroundColor: '#FFFFF'}}
                > */}
          {/* </Header> */}
          <Content
            style={{padding: 20}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                // onRefresh={this._onRefresh.bind(this)}
                onRefresh={this._onRefresh.bind(this)}
              />
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <H1 style={{fontSize: 22}}>Document Manager</H1>
              <TouchableOpacity
                style={{marginLeft: 15}}
                // onPress={() => this.props.navigation.navigate('Camera')}
                onPress={() => this.props.navigation.navigate('Tambah')}>
                <Icon
                  name="folder-plus"
                  type="Feather"
                  style={{color: '#000000'}}></Icon>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Thumbnail
                source={require('../../image/avatar-1.png')}
                style={{width: 60, height: 60}}
              />
              <Body style={{alignItems: 'flex-start', marginLeft: 15}}>
                <Text>Octovianus Pabubung</Text>
                <Text note>Selamat datang!!!</Text>
              </Body>
            </View>

            <ScrollView>
              <View>
                {typeof document != undefined
                  ? document.map((source, i) => (
                      <Card key={i}>
                        <CardItem
                          button
                          onPress={() => {
                            this.openDetail(source);
                          }}>
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
                              <Text note>{source.type_item}</Text>
                              <Text note>{source.date_item}</Text>
                            </Body>
                            <View
                              style={{
                                height: 40,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                alignItems: 'center',
                              }}></View>
                          </View>
                        </CardItem>
                      </Card>
                    ))
                  : null}
              </View>
            </ScrollView>
          </Content>
          </ImageBackground>
          {/* </Container> */}
          {/* </LinearGradient> */}
        </View>
      );
    } else {
      return (
        <Container>
          <ImageBackground
            resizeMode="cover"
            source={require('../../image/launchscreen.png')}
            style={styles.backgroundImage}>
          {/* <Header
                  noShadow
                  // transparent
                  searchBar
                  // style={{backgroundColor: '#FFFFF'}}
                > */}
          {/* </Header> */}
          {/* <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
                > */}
          <Spinner
            visible={spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          </ImageBackground>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: null,
    // height: null,
    flex: 1,
    width: null,
    height: null,
  },
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

  boxdate: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  boxgeneralinformation: {
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  textInput: {
    marginTop: 5,
    height: 50,
    padding: 10,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
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
});

const mapStateToProps = state => ({
  documentData: state.documentData,
});

export default connect(mapStateToProps)(HomeScreen);
// export default (HomeScreen);
