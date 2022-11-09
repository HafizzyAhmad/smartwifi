import React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import NameList from '../../components/lists/name';
import common from '../../styles/common';

const Family = ({ navigation }) => {
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='My Family' nav={navigation} />
      <ScrollView>
        <NameList item={familyMember} nav={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Family;
