import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import common from '../../styles/common';

const img = '../../assets/images/camera.jpeg';

const LiveCamera = ({ navigation }) => {
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='Security Camera' nav={navigation} />
      <View>
        <Image source={require(img)} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
      </View>
    </SafeAreaView>
  );
};

export default LiveCamera;
