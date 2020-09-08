import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Theme, hp, normalize, SCREEN_HEIGHT} from '../../utils';
import {Button, Header, FloatingLabelInput} from '../../components';
export default class Login extends Component {
  state = {
    phone: '',
    password: '',
    isPhoneValid: false,
  };
  handleInput = (name, text) => {
    this.setState({[name]: text});
    let phoneRegEx = /^(\+7 \(7[0-9]{2}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2})$/;
    if (name === 'phone' && text.length === 18) {
      const isValid = phoneRegEx.test(text);
      this.setState({
        isPhoneValid: isValid,
      });
    } else {
      this.setState({
        isPhoneValid: false,
      });
    }
  };
  handleLogin = () => {};
  handleNavigate = (root) => {
    this.props.navigation.navigate(root);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Логин'} style={styles.header} />

        <FloatingLabelInput
          valid={this.state.isPhoneValid}
          maskType="+7 (799) 999-99-99"
          maxLength={18}
          label="Телефон"
          value={this.state.phone}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('phone', text)}
        />

        <FloatingLabelInput
          label="Пароль"
          value={this.state.password}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('password', text)}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handleNavigate('ForgotPassword')}>
          <Text style={styles.loginTxt}>Забыл пароль?</Text>
          <Fontisto
            name="arrow-right-l"
            size={normalize(15)}
            color={Theme.colors.red}
          />
        </TouchableOpacity>
        <Button
          text="Войти"
          style={styles.registerBtn}
          textStyle={styles.registerTxt}
          onPress={() => this.handleLogin()}
        />
        <View style={styles.noAccount}>
          <Text style={styles.noAccountTxt}>Нет аккаунта?</Text>
          <Button
            text="Зарегистрируйтесь"
            textStyle={styles.noAccountBtn}
            onPress={() => this.handleNavigate('Register')}
          />
        </View>
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
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp('1.3%'),
    marginRight: '5%',
  },
  loginTxt: {
    fontSize: normalize(14),
    color: Theme.colors.black,
    marginRight: normalize(4),
  },
  registerBtn: {
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
  registerTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
  noAccount: {
    position: 'absolute',
    left: 0,
    bottom: SCREEN_HEIGHT * 0.05,
    width: '100%',
    alignItems: 'center',
  },
  noAccountTxt: {
    fontSize: normalize(14),
    color: Theme.colors.black,
  },
  noAccountBtn: {
    fontSize: normalize(14),
    color: Theme.colors.red,
    textDecorationLine: 'underline',
  },
});
