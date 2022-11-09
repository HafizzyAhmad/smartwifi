import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import button from '../../styles/button';
import text from '../../styles/text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import common from '../../styles/common';

const SocialMediaButton = ({ nav, type }) => {
  const action = () => {
    nav.navigate('Home');
  };
  return (
    <>
      {type === 'digitalme' && (
        <TouchableOpacity style={[button.digitalme, common.flexRow]} onPress={action}>
          <Text style={[text.whiteButton, common.paddingLeftMedium]}>Continue with DigitalMe</Text>
        </TouchableOpacity>
      )}
      {type === 'facebook' && (
        <TouchableOpacity style={[button.facebook, common.flexRow]} onPress={action}>
          <Ionicons name='logo-facebook' color='white' size={25} />
          <Text style={[text.whiteButton, common.paddingLeftMedium]}>Continue with Facebook</Text>
        </TouchableOpacity>
      )}
      {type === 'twitter' && (
        <TouchableOpacity style={[button.twitter, common.flexRow]} onPress={action}>
          <Ionicons name='logo-twitter' color='white' size={25} />
          <Text style={[text.whiteButton, common.paddingLeftMedium]}>Continue with Twitter</Text>
        </TouchableOpacity>
      )}
      {type === 'google' && (
        <TouchableOpacity style={[button.google, common.flexRow]} onPress={action}>
          <Ionicons name='logo-google' color='white' size={25} />
          <Text style={[text.whiteButton, common.paddingLeftMedium]}>Continue with Google</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SocialMediaButton;
