import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

const DrawerMenu = props => (
  <TouchableOpacity style={props.menuStyle} onPress={props.onPress}>
    <Icon name={props.iconName} size={props.iconSize} style={props.iconStyle} />
    <Text style={props.textStyle}>{props.text}</Text>
  </TouchableOpacity>
);

DrawerMenu.propType = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  menuStyle: PropTypes.object,
  iconSize: PropTypes.string,
};

export default DrawerMenu;
