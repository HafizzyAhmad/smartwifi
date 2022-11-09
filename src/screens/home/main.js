import React from 'react';
import { View, Text, FlatList } from 'react-native';
import LogoHeader from '../../components/headers/main';
import Layout from '../../elements/layout';
import common from '../../styles/common';
import MainMenuCard from '../../components/cards/mainmenu';
import SubMenuCard from '../../components/cards/submenu';

const Home = ({ navigation }) => {
  const mainmenu = {
    name: 'My Family and Health',
    image: '../../assets/images/mainbanner.png',
    nav: 'Family'
  };

  return (
    <Layout custom={common.basicLayout}>
      <LogoHeader />
      <View style={[common.basicContainer]}>
        <MainMenuCard props={mainmenu} nav={navigation} />
        <SubMenuCard nav={navigation} />
      </View>
    </Layout>
  );
};

export default Home;
