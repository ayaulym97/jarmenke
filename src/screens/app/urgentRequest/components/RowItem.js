import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize, Theme} from '../../../../utils';
import {Button} from '../../../../components';

const RowItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>bye</Text>
      <Button
        text="Отправить"
        style={styles.getInTouchBtn}
        textStyle={styles.getInTouchTxt}
        onPress={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: normalize(8),
    backgroundColor: Theme.colors.white,
  },
  getInTouchBtn: {
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.red,
    paddingVertical: normalize(16),
    marginHorizontal: '5%',
    marginTop: hp('5.6%'),

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  getInTouchTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
});
export default RowItem;
