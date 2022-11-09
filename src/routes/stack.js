import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/main';
import Family from '../screens/family/main';
import FamilyDashboard from '../screens/family/dashboard';
import Assets from '../screens/asset/main';
import LocationAssets from '../screens/asset/location';
import LoginMain from '../screens/auth/main';

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initalRouteName={LoginMain}>
      <Screen name='LoginMain' component={LoginMain} />
      <Screen name='Home' component={Home} />
      <Screen name='Family' component={Family} />
      <Screen name='FamilyDashboard' component={FamilyDashboard} />
      <Screen name='Assets' component={Assets} />
      <Screen name='LocationAssets' component={LocationAssets} />
    </Navigator>
  );
};

export default StackNavigator;
