import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
        <Text style={this.props.buttonTextStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propType = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};
