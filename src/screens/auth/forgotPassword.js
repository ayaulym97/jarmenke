import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme, hp, normalize} from '../../utils';
import {Button, Header, FloatingLabelInput} from '../../components';
export default class ForgotPassword extends Component {
  state = {
    email: '',
    isEmailValid: false,
  };
  handleInput = (text) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = emailRegEx.test(text);
    this.setState({
      email: text,
      isEmailValid: isValid,
    });
  };
  handleSendEmail = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Забыл пароль'} style={styles.header} />
        <Text style={styles.subtitle}>
          {`Пожалуйста, введите Ваш адрес электронный\nадрес. Вы получите ссылку для создания нового\nпароля по электронной почте.`}
        </Text>
        <FloatingLabelInput
          label="Email"
          valid={this.state.isEmailValid}
          value={this.state.email}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput(text)}
        />
        <Button
          text="Отправить"
          style={styles.registerBtn}
          textStyle={styles.registerTxt}
          onPress={() => this.handleSendEmail()}
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
  inputContainer: {
    height: hp('7.1%'),
    backgroundColor: Theme.colors.white,
    marginHorizontal: '5%',
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

  subtitle: {
    marginBottom: hp('2.2%'),
    fontSize: normalize(14),
    color: Theme.colors.black,
    marginRight: normalize(4),
    marginHorizontal: '5%',
    // alignSelf: 'center',
  },
  registerBtn: {
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
  registerTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
});
