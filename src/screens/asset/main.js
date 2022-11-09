import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import AssetList from '../../components/lists/asset';
import common from '../../styles/common';

const Assets = ({ navigation }) => {
  const assets = [
    {
      id: 1,
      name: '2022 BMW iX',
      relationship: 'My Personal Car',
      regNo: 'VV 3553'
    },
    {
      id: 1,
      name: 'Ducati Panigale V4',
      relationship: 'Weekend Bike',
      regNo: 'BME 3553'
    },
    {
      id: 1,
      name: 'Lamborghini The Huracán',
      relationship: 'Weekend Car',
      regNo: 'BMX 553'
    },
    {
      id: 1,
      name: 'Land Rover Range Rover Velar',
      relationship: 'Shopping Car',
      regNo: 'WB 3553 A'
    },
    {
      id: 1,
      name: 'Perodua Myvi Third Generation',
      relationship: 'Husband Car',
      regNo: 'WXX 3553'
    }
  ];
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='My Assets' nav={navigation} />
      <ScrollView>
        <AssetList item={assets} nav={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Assets;
