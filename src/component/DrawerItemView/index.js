import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import Collapsible from 'react-native-collapsible';
import styles from './styles';

const DrawerItemView = props => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
    <View style={styles.textViewWrapper}>
      <Text style={styles.menuSliderText}>{props.menuText}</Text>
      <Icon name={props.iconChange ? 'ios-arrow-down' : 'ios-arrow-up'} />
    </View>
    <Collapsible collapsed={!props.iconChange}>
      {props.children}
    </Collapsible>
  </TouchableOpacity>
);

DrawerItemView.propType = {
  onPress: PropTypes.func,
  menuText: PropTypes.string, 
  iconChange: PropTypes.bool,
};

export default DrawerItemView;
