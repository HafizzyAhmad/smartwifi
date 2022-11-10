import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Switch } from 'react-native';
import ScreenHeader from '../../components/headers/detail';
import AssetList from '../../components/lists/asset';
import common from '../../styles/common';
import CardSecurity from '../../components/cards/cardsecurity';
import text from '../../styles/text';
import color from '../../styles/color';
import SectionTitle from '../../components/texts/sectiontitle';

const Security = ({ navigation }) => {
  const [status, setStatus] = useState(false);

  const toggleSwitch = () => {
    return setStatus((status) => !status);
  };

  const device = [
    {
      id: 1,
      name: 'My Bedroom',
      image: '../../assets/images/mainbanner.png',
      nav: 'LiveCamera',
      status: 'ONLINE'
    },
    {
      id: 1,
      name: 'Living Room',
      image: '../../assets/images/mainbanner.png',
      nav: 'LiveCamera',
      status: 'ONLINE'
    },
    {
      id: 1,
      name: 'Kitchen Area',
      image: '../../assets/images/mainbanner.png',
      nav: 'LiveCamera',
      status: 'OFFLINE'
    },
    {
      id: 1,
      name: 'Parking Area',
      image: '../../assets/images/mainbanner.png',
      nav: 'LiveCamera',
      status: 'ONLINE'
    }
  ];
  return (
    <SafeAreaView style={[common.basicLayout]}>
      <ScreenHeader title='Safety & Security' nav={navigation} />
      <ScrollView>
        <View
          style={[
            status ? color.bgLightestGreen : color.bgLightestGrey,
            common.paddingHorizontalContainer,
            common.paddingVerticalXXLarge,
            common.flexRowSpaceBetween,
            common.centerVertically,
            common.marginBottomLarge
          ]}
        >
          <Text style={[text.blackHeadlineBold, color.fontBlack]}>
            {`This Alarm is now\n`}
            {status ? <Text>Armed</Text> : <Text>Unarmed</Text>}
          </Text>
          <View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={status}
            />
          </View>
        </View>
        <View style={{}}>
          <SectionTitle title='Security Camera' />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {device.map((item) => (
              <CardSecurity data={item} nav={navigation} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Security;
