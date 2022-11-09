import React from 'react';
import { Button, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import common from '../../styles/common';
import LineChartGeneral from '../../components/charts/linechart';

const FamilyDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='Dashboard' nav={navigation} />
      <ScrollView>
        <LineChartGeneral title='My Fitness Performance' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FamilyDashboard;
