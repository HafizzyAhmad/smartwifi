import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import common from '../../styles/common';

const img = '../../assets/images/map-temp.png';

const LocationAssets = ({ navigation }) => {
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='Location' nav={navigation} />
      <View>
        <Image
          source={require(img)}
          resizeMode='contain'
          style={{ width: '100%', height: '100%' }}
        />
        {/* <Text>Map Will Show Here</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default LocationAssets;
