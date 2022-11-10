import React from 'react';
import { Text } from 'react-native';
import text from '../../styles/text';
import common from '../../styles/common';

function SectionTitle({ title }) {
  console.log('TITLE: ', title);
  return (
    <Text
      style={{ ...text.blackSectionTitle, ...common.section, ...common.paddingHorizontalContainer }}
    >
      {title}
    </Text>
  );
}

export default SectionTitle;
