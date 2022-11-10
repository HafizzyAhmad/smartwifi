import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import text from '../../styles/text';
import card from '../../styles/card';
import color from '../../styles/color';

const CardSecurity = ({ nav, data }) => {
  return (
    <TouchableOpacity
      style={[card.security, color.borderGrey]}
      onPress={() => nav.navigate(data.nav)}
    >
      <View>
        <Text style={[text.blackHeadlineBold]}>{data.name}</Text>
      </View>
      {data.status === 'ONLINE' ? (
        <Text style={[text.greenStatus, text.lineHeightBody]}>{data.status}</Text>
      ) : (
        <Text style={[text.yellowStatus, text.lineHeightBody]}>{data.status}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CardSecurity;
