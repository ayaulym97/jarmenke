import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {normalize, Theme} from '../utils';
import Button from './Button';
const ScrollBtns = ({data, selected, onPress}) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scroll}>
      {data.map((item) => {
        return (
          <Button
            key={item.title}
            text={item.title}
            textStyle={styles.btnTxt}
            style={[
              styles.btn,
              item.title === selected ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => onPress(item.title)}
          />
        );
      })}
    </ScrollView>
  );
};

export default ScrollBtns;
const styles = StyleSheet.create({
  scroll: {
    paddingLeft: '5%',
  },
  btn: {
    marginRight: normalize(20),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  activeBtn: {
    backgroundColor: Theme.colors.red,
  },
  inactiveBtn: {
    backgroundColor: Theme.colors.black,
  },
  btnTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
    marginVertical: normalize(7),
    marginHorizontal: normalize(10),
  },
});
