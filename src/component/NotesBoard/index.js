import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const NotesBoard = props => (
  <TouchableOpacity onPress={() => props.onPress} style={props.style}>
    <View style={props.tabTextStyle}>
      <Text style={props.tabTextView}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

NotesBoard.propType = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  tabTextStyle: PropTypes.object,
  tabTextView: PropTypes.object,
  text: PropTypes.string,
};

export default NotesBoard;
