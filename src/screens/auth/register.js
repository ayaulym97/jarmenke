import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Theme, hp, normalize} from '../../utils';
import {Button, Header, FloatingLabelInput, CustomIcon} from '../../components';
export default class Register extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    isPhoneValid: false,
    isEmailValid: false,
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
    if (name === 'email') {
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const isValid = emailRegEx.test(text);
      this.setState({
        isEmailValid: isValid,
      });
    } 

    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  };
  handleRegister = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Регистрация'} style={styles.header} />
        <FloatingLabelInput
          label="Имя"
          value={this.state.name}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('name', text)}
        />
        <FloatingLabelInput
          label="Телефон"
          valid={this.state.isPhoneValid}
          value={this.state.phone}
          maskType="+7 (799) 999-99-99"
          maxLength={18}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('phone', text)}
        />
        <FloatingLabelInput
          label="Email"
          valid={this.state.isEmailValid}
          value={this.state.email}
          style={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={(text) => this.handleInput('email', text)}
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
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginTxt}>У меня уже есть аккаунт</Text>
          <Fontisto
            name="arrow-right-l"
            size={normalize(15)}
            color={Theme.colors.red}
          />
        </TouchableOpacity>
        <Button
          text="Регистрация"
          style={styles.registerBtn}
          textStyle={styles.registerTxt}
          onPress={() => this.handleRegister()}
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
});
