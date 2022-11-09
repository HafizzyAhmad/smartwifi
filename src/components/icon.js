import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

function ArrowLeft() {
  return <Ionicons name='md-arrow-back' size={30} color='#090A0A' />;
}

function IconHeaderRight({ iconRightName }) {
  return <Ionicons name={iconRightName} size={30} color='#090A0A' />;
}

export { ArrowLeft, IconHeaderRight };
