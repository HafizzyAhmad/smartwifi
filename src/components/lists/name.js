import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import common from '../../styles/common';
import list from '../../styles/list';
import text from '../../styles/text';

function NameList({ item, nav }) {
  return (
    <View style={[common.paddingHorizontalContainer]}>
      {item.map((data, index) => {
        return (
          <>
            <TouchableOpacity
              style={[
                common.flexRowSpaceBetween,
                common.paddingVerticalMedium,
                common.centerVertically
              ]}
              onPress={() => nav.navigate('FamilyDashboard')}
            >
              <View>
                <Text style={[text.lineHeightM, text.greyLabelText]}>
                  {`${data.relationship.toUpperCase()}`}
                </Text>
                <Text style={[text.blackSectionTitle, text.lineHeightM]}>{data.name}</Text>
                <Text style={[text.lineHeightM, text.blackBodyReg]}>{`Age: ${data.age}`}</Text>
              </View>
            </TouchableOpacity>
            {index !== item.length - 1 && <View style={list.horizontalLine} />}
          </>
        );
      })}
    </View>
  );
}

export default NameList;
