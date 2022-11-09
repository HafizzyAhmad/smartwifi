import React from 'react';
import { FlatList, Image, View } from 'react-native';
import color from '../../styles/color';
import header from '../../styles/header';
import image from '../../styles/image';
// import { header, image, text, common } from 'style';

const LogoHeader = () => {
  const logo = '../../assets/images/headerlogo.png';

  return (
    <View style={[color.bgPurple, header.mainHeader]}>
      <Image source={require(logo)} style={image.logo} />
    </View>
  );
};

export default LogoHeader;
