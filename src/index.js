import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login';
import HomeScreen from './screens/Home';
import Camera from './screens/Camera';
import File from './screens/File';
import Picture from './screens/Picture/index';
// import ImagePicker from './screens/Picture/imagePicker';
import DiningHall from './screens/DiningHall';
import DocumentStack from './screens/Document/index';
import addDocument from './screens/Document/addDocument';
import Detail from './screens/Detail';
// import { logIn } from './common/constant';

const AppNavigator = createStackNavigator({
  Login:{
    screen: Login,
  },
  Home: {
    screen: HomeScreen,
  },
  Document:{
    screen: DocumentStack,
  },
  Camera: {
    screen: Camera,
  },
  // File: {
  //   screen: File,
  // },
  // Picture: {
  //   screen: Picture,
  // },
  // ImagePicker:{
  //   screen: ImagePicker,
  // },
  // DiningHall:{
  //   screen: DiningHall,
  // },
  Tambah: {
    screen: addDocument
  },
  Detail: {
    screen: Detail
  }
});

export default createAppContainer(AppNavigator);
