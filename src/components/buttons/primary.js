import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import button from '../../styles/button';
import text from '../../styles/text';

const PrimaryButton = ({ buttonText, nav }) => {
  return (
    <TouchableOpacity style={[button.primary]} onPress={nav}>
      <Text style={[text.whiteButton]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
