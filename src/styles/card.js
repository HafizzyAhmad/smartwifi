import { StyleSheet } from 'react-native';
import color from './color';
import common from './common';

const BASE = {
  // marginHorizontal: 15,
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 10,
  shadowOpacity: 0.1
};

export default StyleSheet.create({
  security: {
    ...BASE,
    ...color.bgWhite,
    paddingBottom: 70,
    width: '20%',
    marginLeft: 15,
    ...color.borderGrey
  }
});
