import { StyleSheet } from 'react-native';
import color from './color';
import common from './common';

export default StyleSheet.create({
  productActive: {
    padding: 8,
    borderRadius: 4,
    width: '70%',
    alignItems: 'center',
    ...color.bgWhite,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },
  productInactive: {
    padding: 8,
    borderRadius: 4,
    width: '70%',
    alignItems: 'center'
  },
  primary: {
    ...color.bgPurple,
    ...common.center,
    height: 45,
    borderRadius: 30,
    marginTop: 20
  },
  primaryDisable: {
    ...color.bgLighterGrey,
    ...common.flexCenter,
    height: 45,
    borderRadius: 30,
    marginTop: 20
  },
  simple: {
    width: 16,
    height: 16
  },
  basicFooter: {
    ...color.bgRed,
    ...common.marginMedium,
    borderRadius: 40
  },
  login: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 0.2,
    borderColor: '#fff',
    borderRadius: 24
  },
  digitalme: {
    ...common.center,
    height: 45,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#090A0A'
  },
  facebook: {
    ...common.center,
    height: 45,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#4267B2'
  },
  twitter: {
    ...common.center,
    height: 45,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#00acee'
  },
  google: {
    ...common.center,
    height: 45,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: '#DB4437'
  }
});
