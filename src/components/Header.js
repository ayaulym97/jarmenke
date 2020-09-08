import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize, Theme} from '../utils';

const Header = ({title,style}) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: normalize(30),
    fontWeight: Theme.weight.Bold,
    color: Theme.colors.black,
    marginHorizontal:'5%',
    marginVertical: normalize(12),
  },
});
export default Header;
