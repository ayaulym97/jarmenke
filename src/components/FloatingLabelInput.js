import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInputMask} from 'react-native-masked-text';
import {Theme, normalize} from '../utils';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {
      maskType,
      valid,
      label,
      style,
      inputStyle,
      value,
      ...props
    } = this.props;
    const {isFocused} = this.state;

    return (
      <View style={[style, styles.container]}>
        <View style={styles.content}>
          {(value !== '' || isFocused) && (
            <Text style={styles.labelTxt}>{label}</Text>
          )}
          {maskType ? (
            <TextInputMask
              {...props}
              value={value}
              style={inputStyle}
              type={'cel-phone'}
              placeholder={!isFocused ? label : ''}
              options={{
                dddMask: maskType,
              }}
              placeholderTextColor={Theme.colors.gray}
              selectionColor={Theme.colors.black}
            />
          ) : (
            <TextInput
              {...props}
              value={value}
              style={[inputStyle, isFocused && {fontWeight: Theme.weight.Bold}]}
              placeholder={!isFocused ? label : ''}
              placeholderTextColor={Theme.colors.gray}
              selectionColor={Theme.colors.black}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
            />
          )}
        </View>
        {value!=""&&valid&&<AntDesign
          size={normalize(20)}
          name={valid ? 'check' : 'close'}
          color={valid ? Theme.colors.green : Theme.colors.red}
        />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  labelTxt: {
    fontSize: normalize(12),
    color: Theme.colors.gray,
    marginBottom: normalize(3),
  },
});
