//import liraries
import React, {Component} from 'react';
import {CATAGORIES, FAVORITES, HOME, PROFILE} from '../../utils/routes';
import {Category, Heart, Home2, Profile} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATAGORIES) {
    return <Category size={size} color={color} variant="Bold" />;
  } else if (name == FAVORITES) {
    return <Heart size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

export default TabIcon;
