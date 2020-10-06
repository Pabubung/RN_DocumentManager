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
];

const {height, width} = Dimensions.get('window');
class File extends React.Component {
  // static navigationOptions = {
  //   headerShown: false,
  // };
  state = {
    data: {},
    picture: [],
    dininghall: [],
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_DININGHALL_LIST',
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.diningHallData != undefined) {
      this.setState({
        dininghall: nextProps.diningHallData.dininghall.table1,
      });
      // console.log("Tes Picture", this.state.picture);
    }
  }
  render() {
    console.log('Tes data dining hall', this.state.dininghall);
    return (
      <Container>
        <ScrollView>
          <View style={{margin: 10}}>
            {this.state.dininghall.map((source, i) => (
              <Card key={i}>
                <CardItem>
                  <View>
                    <Image
                      style={{width: 100, height: 100}}
                      source={require('../../image/album-art-01.jpg')}
                    />
                  </View>
                  <View>
                    <Body style={{marginHorizontal: 20}}>
                      <Text>{source.food_name}</Text>
                      <Text note>{source.food_detail}</Text>
                    </Body>

                    {/* <Icon
                      // onPress={() => this.props.navigation.navigate('Picture')}
                      style={{
                        // float: 'right',
                        fontSize: 20,
                        color: 'black',
                        marginRight: 0,
                        flexDirection: 'row',
                        
                      }}
                      name="heart"
                      type="Feather"
                    /> */}

                    <View
                      style={{
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Left>
                        <Text 
                        // style={{marginLeft: 17}}
                        >
                          Dining Hall {source.food_group}
                        </Text>
                      </Left>
                      <Right>
                        <Icon
                          style={{fontSize: 20, color: 'black'}}
                          name="heart"
                          type="Feather"
                        />
                      </Right>
                    </View>
                  </View>
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
  diningHallData: state.diningHallData,
});
export default connect(mapStateToProps)(File);
