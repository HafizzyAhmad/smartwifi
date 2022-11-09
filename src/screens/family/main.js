import React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import NameList from '../../components/lists/name';
import common from '../../styles/common';

const Family = ({ navigation }) => {
  const familyMember = [
    {
      id: 1,
      name: 'Frida Rowland',
      relationship: 'My Self',
      age: 24
    },
    {
      id: 1,
      name: 'Darius Cervantes',
      relationship: 'My Husband',
      age: 30
    },
    {
      id: 1,
      name: 'Dax Mata',
      relationship: 'My Son',
      age: 10
    },
    {
      id: 1,
      name: 'Brooklyn Marsh',
      relationship: 'My Son',
      age: 6
    },
    {
      id: 1,
      name: 'Julie Clayton',
      relationship: 'My Daughter',
      age: 4
    }
  ];
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
