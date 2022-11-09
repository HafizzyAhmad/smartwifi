import React from 'react';
import { Text, View, Image, Linking, Pressable, SafeAreaView } from 'react-native';
import common from '../../styles/common';
import text from '../../styles/text';
import image from '../../styles/image';
import button from '../../styles/button';
import color from '../../styles/color';
import PrimaryButton from '../../components/buttons/primary';
import SocialMediaButton from '../../components/buttons/socialmediabutton';

const LoginMain = ({ navigation }) => {
  const logo = '../../assets/images/logomain.png';

  return (
    <View style={[common.basicLayout, color.bgLightestPurple]}>
      <View
        style={[color.bgPurple, common.paddingVerticalXXLarge, common.center, { height: '40%' }]}
      >
        <Image source={require(logo)} style={[image.login]} />
      </View>

      <View style={[common.basicContainer]}>
        <SocialMediaButton type='digitalme' nav={navigation} />
        <SocialMediaButton type='facebook' nav={navigation} />
        <SocialMediaButton type='twitter' nav={navigation} />
        <SocialMediaButton type='google' nav={navigation} />
      </View>
    </View>
  );
};

export default LoginMain;
