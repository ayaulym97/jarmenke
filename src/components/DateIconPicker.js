import React from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import CustomIcon from './CustomIcon';
import {hp, Theme, normalize, SCREEN_WIDTH} from '../utils';
const DateIconPicker = ({date, placeholder, onDateChange}) => (
  <DatePicker
    placeholder={placeholder}
    style={styles.dateStyle}
    date={date}
    mode="date"
    format="YYYY-MM-DD"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateText: styles.dateTxt,
      placeholderText: styles.datePlaceholder,
      dateIcon: styles.dateIcon,
      dateInput: styles.dateInput,
    }}
    minuteInterval={10}
    onDateChange={onDateChange}
    iconComponent={
      <CustomIcon
        name={'calendar'}
        size={normalize(20)}
        color={Theme.colors.gray}
      />
    }
  />
);
export default DateIconPicker;
const styles = StyleSheet.create({
  dateIcon: {
    position: 'absolute',
    right: 5,
    top: 4,
  },
  dateStyle: {
    width: SCREEN_WIDTH *0.44,
    height: hp('7.1%'),
    backgroundColor: Theme.colors.white,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    borderRadius: normalize(4),

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  dateTxt: {
    fontSize: normalize(14),
    color: Theme.colors.black,
  },
  dateInput: {
    marginRight: normalize(4),
    borderWidth: 0,
  },
  datePlaceholder: {
    fontSize: normalize(14),
    color: Theme.colors.gray,
  },
});
