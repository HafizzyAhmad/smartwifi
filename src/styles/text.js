import { StyleSheet } from 'react-native';
import color from './color';

const XXLARGE = 28;
const XLARGE = 18;
const LARGE = 16;
const REGULAR = 14;
const SMALL = 12;

const titleScreen = { fontSize: REGULAR, fontWeight: 'bold' };
const largeTitle = { fontSize: XXLARGE, fontWeight: 'bold' };
const sectionTitle = { fontSize: XLARGE, fontWeight: 'bold' };
const headingBody = { fontSize: LARGE };
const headingBodyBold = { fontSize: LARGE, fontWeight: 'bold' };
const body = { fontSize: REGULAR };
const bodyHighlight = { fontSize: REGULAR };
const captionBold = { fontSize: SMALL, fontWeight: 'bold' };
const caption = { fontSize: SMALL };

export default StyleSheet.create({
  center: { textAlign: 'center' },
  alignSelfCenter: { alignSelf: 'center' },
  alignItemCenter: { alignItems: 'center' },
  justify: { textAlign: 'justify' },
  right: { textAlign: 'right' },
  lineHeightLarge: { lineHeight: 30 },
  lineHeightBody: { lineHeight: 20 },

  blackHeadlineBold: { ...largeTitle, ...color.fontBlack },
  blackTitleScreen: { ...titleScreen, ...color.fontBlack },
  blackSectionTitle: { ...sectionTitle, ...color.fontBlack },
  blackHeading: { ...headingBody, ...color.fontBlack },
  blackHeadingBold: { ...headingBodyBold, ...color.fontBlack },
  blackBodyHighlight: { ...bodyHighlight, ...color.fontBlack },
  blackBodyReg: { ...body, ...color.fontBlack },
  blackButton: { ...headingBodyBold, ...color.fontBlack },

  greyBodyReg: { ...body, ...color.fontGrey },
  greyLabelText: { ...caption, ...color.fontGrey },

  whiteHeadlineBold: { ...largeTitle, ...color.fontWhite },
  whiteTitleScreen: { ...titleScreen, ...color.fontWhite },
  whiteSectionTitle: { ...sectionTitle, ...color.fontWhite },
  whiteHeading: { ...headingBody, ...color.fontWhite },
  whiteBodyHighlight: { ...bodyHighlight, ...color.fontWhite },
  whiteBodyReg: { ...body, ...color.fontWhite },
  whiteButton: { ...headingBodyBold, ...color.fontWhite },

  yellowStatus: { ...captionBold, ...color.fontYellow },

  greenHeadline: { ...largeTitle, ...color.fontGreen },
  greenStatus: { ...captionBold, ...color.fontGreen },

  lineHeightXXL: { lineHeight: 36 },
  lineHeightXL: { lineHeight: 27 },
  lineHeightL: { lineHeight: 24 },
  lineHeightM: { lineHeight: 21 },
  lineHeightS: { lineHeight: 18 }
});
