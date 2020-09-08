import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import {
  Button,
  Header,
  FloatingLabelInput,
  DateIconPicker,
} from '../../../components';
import {Theme, hp, normalize, } from '../../../utils';

export default class Offer extends Component {
  state = {
    price: '',
    deliverDate: '',
    slaughterDate: '',
    volume: '',
    deliverType: '',
    comment: '',
  };
  handleInput = (name, text) => {
    this.setState({[name]: text});
  };
  handleOffer = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Предложения'} style={styles.header} />
        <FloatingLabelInput
          label="Предложить другую цену"
          keyboardType="numeric"
          value={this.state.price}
          style={[styles.inputContainer, {marginHorizontal: '5%'}]}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('price', text)}
        />
        <View style={styles.datesRow}>
          <DateIconPicker
            placeholder="Дата доставки"
            date={this.state.deliverDate}
            onDateChange={(date) => this.handleInput('deliverDate', date)}
          />
          <DateIconPicker
            placeholder="Дата забоя"
            date={this.state.slaughterDate}
            onDateChange={(date) => this.handleInput('slaughterDate', date)}
          />
        </View>
        <View style={styles.datesRow}>
          <FloatingLabelInput
            label="Объем   "
            value={this.state.volume}
            style={[styles.inputContainer, {width: '30%'}]}
            inputStyle={styles.input}
            onChangeText={(text) => this.handleInput('volume', text)}
          />
          <RNPickerSelect
            placeholder={{label: 'Способ доставки', value: null}}
            useNativeAndroidPickerStyle={false}
            pickerProps={{}}
            style={pickerSelectStyles}
            onValueChange={(value) =>
              this.props.savePermanentItem('city', value)
            }
            items={[]}
            value={this.props.city}
            placeholderTextColor={Theme.colors.gray}
            Icon={() => {
              return (
                <Feather
                  name={'chevron-down'}
                  size={normalize(16)}
                  color={Theme.colors.gray}
                />
              );
            }}
          />
        </View>
        <TextInput
          multiline
          maxLength={200}
          placeholder="Коммент"
          value={this.state.comment}
          style={styles.commentInput}
          placeholderTextColor={Theme.colors.gray}
          onChangeText={(text) => this.handleInput('comment', text)}
        />

        <Button
          text="Предложить"
          style={styles.offerBtn}
          textStyle={styles.offerTxt}
          onPress={() => this.handleOffer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    marginBottom: hp('5.6%'),
  },
  dateIcon: {
    position: 'absolute',
    right: 5,
    top: 4,
  },
  inputContainer: {
    height: hp('7.1%'),
    backgroundColor: Theme.colors.white,
    // marginHorizontal: '5%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    borderRadius: normalize(4),
    marginBottom: hp('1.2%'),

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  input: {
    fontSize: normalize(14),
    color: Theme.colors.black,
  },
  datesRow: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1.2%'),
  },

  offerBtn: {
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.red,
    paddingVertical: normalize(16),
    marginHorizontal: '5%',
    marginTop: hp('3.7%'),

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  offerTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
  pickerContainer: {
    height: hp('7.1%'),
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
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
  pickerInput: {
    width: '59%',
    fontSize: normalize(14),
    color: Theme.colors.text,
    marginVertical: normalize(8),
  },
  commentInput: {
    fontSize: normalize(14),
    color: Theme.colors.black,
    width: '90%',
    height: normalize(150),
    alignSelf: 'center',
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
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
});
const pickerSelectStyles = {
  iconContainer: {
    position: 'relative',
  },
  inputIOSContainer: styles.pickerContainer,
  inputAndroidContainer: styles.pickerContainer,
  inputIOS: styles.pickerInput,
  inputAndroid: styles.pickerInput,
};
