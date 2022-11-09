import React from 'react';
import { View } from 'react-native';
import color from '../styles/color';
import common from '../styles/common';

/*
 * created to be the parent of component for device without notch
 * added background white as base color
 * children can be from multiple components
 */

function Layout({ children, custom }) {
  return <View style={[common.flex1, custom]}>{children}</View>;
}

export default Layout;
