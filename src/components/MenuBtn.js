import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';

import {SCREEN_WIDTH, normalize, Theme} from '../utils';
const MenuBtn = ({onPress}) => (
  <TouchableOpacity
    style={{marginRight: SCREEN_WIDTH * 0.04}}
    onPress={onPress}>
    <CustomIcon name="menu" color={Theme.colors.black} size={normalize(16)} />
  </TouchableOpacity>
);
export default MenuBtn;
