import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import common from '../../styles/common';
import text from '../../styles/text';
import { FlatGrid } from 'react-native-super-grid';
import InAppBrowser from '../../utils/inappbrowser';

// import card from '../../styles/card';
// import color from '../../styles/color';
// import common from '../../styles/common';

const SubMenuCard = ({ nav }) => {
  const IMAGE_ASSETS = require('../../assets/images/subbanner-assets.png');
  const IMAGE_BIZ = require('../../assets/images/subbanner-ads.png');

  const submenu = [
    {
      id: 1,
      name: 'Assets Tracking',
      image: IMAGE_ASSETS,
      navigate: () => nav.navigate('Assets')
    },
    {
      id: 2,
      name: 'Biz Applications',
      image: IMAGE_BIZ,
      navigate: () =>
        InAppBrowser.openLink(
          'https://home.unifi.com.my/cari-seller?utm_campaign=sme_tactical_smeQ1solution&utm_medium=sem&utm_source=googlesearch&utm_content=_eng&utm_term=Cari'
        )
    }
  ];

  return (
    <>
      <FlatGrid
        itemDimension={120}
        data={submenu}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={item.navigate}>
              <Image
                source={item.image}
                resizeMode='cover'
                style={{ width: '100%', height: 120, borderRadius: 8 }}
              />
              <Text style={[common.paddingVerticalMedium, text.blackButton]}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        style={[common.gridViewContainer]}
      />
    </>
  );
};

export default SubMenuCard;
