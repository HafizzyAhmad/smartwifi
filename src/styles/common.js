import { StyleSheet } from 'react-native';
import color from './color';

const BASIC = {
  flex: 1
};

export default StyleSheet.create({
  flexCenter: {
    ...BASIC,
    justifyContent: 'center',
    alignItems: 'center'
  },
  basicLayoutLogin: {
    ...BASIC,
    ...color.bgLightestPurple
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerVertically: {
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  basicContainer: {
    ...BASIC,
    padding: 24
  },
  basicLayout: {
    ...BASIC,
    ...color.bgWhite
  },
  section: {
    marginTop: 10,
    marginBottom: 20
  },
  flex1: {
    flex: 1
  },
  paddingSmall: {
    padding: 5
  },
  paddingContainer: {
    padding: 15
  },
  paddingHorizontalContainer: {
    paddingHorizontal: 15
  },
  paddingVerticalXSmall: {
    paddingVertical: 5
  },
  paddingVerticalSmall: {
    paddingVertical: 10
  },
  paddingVerticalMedium: {
    paddingVertical: 15
  },
  paddingVerticalLarge: {
    paddingVertical: 30
  },
  paddingVerticalXXLarge: {
    paddingVertical: 60
  },
  paddingRightXSmall: {
    paddingRight: 5
  },
  paddingRightSmall: {
    paddingRight: 20
  },
  paddingLeftMedium: {
    paddingLeft: 15
  },
  paddingBottomSeparator: {
    paddingBottom: 20
  },
  marginBottomLarge: {
    marginBottom: 30
  },
  marginVerticalMedium: {
    marginVertical: 20
  },
  width30: {
    width: 30
  },
  widthHalf: {
    width: '50%'
  },

  gridViewContainer: {
    margin: -10,
    flex: 1
  }
});
