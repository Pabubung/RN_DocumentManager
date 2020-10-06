import * as React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
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
import img from '../../image/album-art-01.jpg';
import axios from 'axios';

import {connect} from 'react-redux';
import compose from 'recompose/compose';
import dexaPictureActions from '../../redux/dexapicture/actions';

const {DEXAPICTURE_GET} = dexaPictureActions;

const COVERS = [
  require('../../image/album-art-01.jpg'),
  require('../../image/album-art-02.jpg'),
  require('../../image/album-art-03.jpg'),
  require('../../image/album-art-04.jpg'),
  require('../../image/album-art-05.jpg'),
  require('../../image/album-art-06.jpg'),
  require('../../image/album-art-07.jpg'),
  require('../../image/album-art-08.jpg'),
  require('../../image/album-art-09.jpg'),
  require('../../image/album-art-10.jpg'),
  require('../../image/album-art-11.jpg'),
  require('../../image/album-art-12.jpg'),
  require('../../image/album-art-13.jpg'),
  require('../../image/album-art-14.jpg'),
  require('../../image/album-art-15.jpg'),
  require('../../image/album-art-16.jpg'),
  require('../../image/album-art-17.jpg'),
  require('../../image/album-art-18.jpg'),
  require('../../image/album-art-19.jpg'),
  require('../../image/album-art-20.jpg'),
  require('../../image/album-art-21.jpg'),
  require('../../image/album-art-22.jpg'),
  require('../../image/album-art-23.jpg'),
  require('../../image/album-art-24.jpg'),
];

const {height, width} = Dimensions.get('window');
class File extends React.Component {
  // static navigationOptions = {
  //   headerShown: false,
  // };
  state = {
    data: {},
    picture: [],
  };

  // componentWillMount() {
  //   AsyncStorage.getItem('userData').then((data) => {
  //     // console.log("data@@componentWillMount",data)
  //     if(data) {
  //       this.setState({showDrawer: true})
  //     }
  //   }).done();
  // }
  componentDidMount() {
    // const value = {
    //   email: 'anya.manggar@dexagroup.com',
    // };

    this.props.dispatch({
      type: 'FETCH_EVENT_LIST',
      // payload: value,
    });
    // console.log('Blaaa', value);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.eventData.event.eventListCurrent!= undefined) {
      this.setState({
        picture: nextProps.eventData.event.eventListCurrent,
      });
      // console.log("Tes Picture", this.state.picture);
    }
  }
  render() {
    console.log('Tes data', this.state.picture);
    return (
      <Container>
        <ScrollView>
          <View style={{margin: 10}}>
            <Card>
              <CardItem>
                {/* <Thumbnail source={icon} /> */}
                <Body style={{marginHorizontal: 20}}>
                  <Text>Nora Roberts</Text>
                  <Text note>Today</Text>
                </Body>
                <Right>
                  <Icon name="dots-three-vertical" type="Entypo" />
                </Right>
              </CardItem>
              <CardItem>
                <Text note>
                  Have you ever known exactly what you want to cook but searched
                  and searched through all of your cook books and had no luck
                  finding that tender… Lebih
                </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Button iconLeft light transparent>
                    <Icon name="md-heart" />
                    <Text style={{fontSize: 12}} note>
                      40 Likes
                    </Text>
                  </Button>
                </Left>
                <Body>
                  <Button iconLeft light transparent>
                    <Icon name="reply" type="Entypo" />
                    <Text style={{fontSize: 12}} note>
                      40 Komentar
                    </Text>
                  </Button>
                </Body>
                <Right>
                  <Button iconLeft light transparent>
                    <Icon name="bookmark" type="Feather" />
                    <Text style={{fontSize: 12}} note>
                      12 Simpan
                    </Text>
                  </Button>
                </Right>
              </CardItem>
              <View style={{borderWidth: 1, borderColor: '#EEF0F5'}}></View>
              <CardItem bordered>
                <Text note style={{fontSize: 11}}>
                  Update 6 menit yang lalu
                </Text>
              </CardItem>
            </Card>

            {COVERS.map((source, i) => (
              <Card key={i}>
                <CardItem>
                  <Body style={{marginHorizontal: 20}}>
                    <Text>Julia Drosten</Text>
                    <Text note>Today</Text>
                  </Body>
                  <Right>
                    <Icon name="dots-three-vertical" type="Entypo" />
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={source}
                    //   style={styles.photo}
                    style={{height: 200, width: null, flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button iconLeft light transparent>
                      <Icon name="md-heart" />
                      <Text style={{fontSize: 12}} note>
                        60 Likes
                      </Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button iconLeft light transparent>
                      <Icon name="reply" type="Entypo" />
                      <Text style={{fontSize: 12}} note>
                        99 Komentar
                      </Text>
                    </Button>
                  </Body>
                  <Right>
                    <Button iconLeft light transparent>
                      <Icon name="bookmark" type="Feather" />
                      <Text style={{fontSize: 12}} note>
                        42 Simpan
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
                <View style={{borderWidth: 1, borderColor: '#EEF0F5'}}></View>
                <CardItem bordered>
                  <Text note style={{fontSize: 11}}>
                    Update 12 menit yang lalu
                  </Text>
                </CardItem>
              </Card>
            ))}
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

// export default File;

// export default compose(
//   connect(
//     {
//       DEXAPICTURE_GET,
//     }
//   )
// )(File);

const mapStateToProps = state => ({
  eventData: state.eventData,
});
export default connect(mapStateToProps)(File);
