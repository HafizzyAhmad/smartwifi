import { StyleSheet } from 'react-native';

const color = {
  white: '#FFFFFF',
  black: '#090A0A',
  basePurple: '#6B4EFF',
  lightestPurple: '#E7E7FF',
  baseRed: '#EC0000',
  lighterRed: '#FFDBDB',
  lightestRed: '#FDFBF8',
  baseGreen: '#23C16B',
  lightestGreen: '#ECFCE5',
  baseYellow: '#FFB323',
  lightestYellow: '#FFEFD7',
  baseGrey: '#72777A',
  lightestGrey: '#F2F4F5',
  lighterGrey: '#BBBBBB'
};

export default StyleSheet.create({
  fontBlack: { color: color.black },
  fontWhite: { color: color.white },
  fontGrey: { color: color.baseGrey },
  fontGreen: { color: color.baseGreen },
  fontYellow: { color: color.baseYellow },
  fontRed: { color: color.baseRed },

  bgBlack: { backgroundColor: color.black },
  bgWhite: { backgroundColor: color.white },
  bgPurple: { backgroundColor: color.basePurple },
  bgYellow: { backgroundColor: color.baseYellow },
  bgRed: { backgroundColor: color.baseRed },
  bgGreen: { backgroundColor: color.baseGreen },
  bgLighterRed: { backgroundColor: color.lighterRed },
  bgLightestRed: { backgroundColor: color.lightestRed },
  bgLightestPurple: { backgroundColor: color.lightestPurple },
  bgLighterGrey: { backgroundColor: color.lighterGrey },
  bgLightestGrey: { backgroundColor: color.lightestGrey },
  bgLightestGreen: { backgroundColor: color.lightestGreen },
  bgLightestYellow: { backgroundColor: color.lightestYellow },

  borderGrey: { borderColor: color.lighterGrey },
  borderBlack: { borderColor: color.black },
  borderRed: { borderColor: color.baseRed }
});
