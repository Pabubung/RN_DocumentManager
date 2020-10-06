import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Index from './index';
import addDocument from './addDocument';

const AppNavigator = createStackNavigator({
  Documents: {
    screen: Index ,
  },
  Tambah:{
    screen: addDocument,
  },
});
export default createAppContainer(AppNavigator);
