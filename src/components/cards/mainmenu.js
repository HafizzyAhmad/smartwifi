import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import common from '../../styles/common';
import text from '../../styles/text';
import * as RootNavigation from '../../routes/RootNavigation';
// import card from '../../styles/card';
// import color from '../../styles/color';
// import common from '../../styles/common';

const MainMenuCard = ({ props, nav }) => {
  console.log('PROPS: ', props);
  return (
    <TouchableOpacity style={common.paddingBottomSeparator} onPress={() => nav.navigate('Family')}>
      <Image
        source={require('../../assets/images/mainbanner.png')}
        resizeMode='cover'
        style={{ width: '100%', height: 160, borderRadius: 10 }}
      />
      <Text style={[common.paddingVerticalMedium, text.blackButton]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default MainMenuCard;
