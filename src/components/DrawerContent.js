import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import {DrawerItems, SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {savePermanentItem} from '../store/actions/permanentAction';
import {normalize, Theme} from '../utils';
import Logo from './Logo';
class DrawerContent extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.header}>
          <Logo />
          <RNPickerSelect
            placeholder={{}}
            useNativeAndroidPickerStyle={false}
            pickerProps={{}}
            style={{
              inputIOS: styles.picker,

              inputAndroid: styles.picker,
              iconContainer: {
                top: '25%',
                right: normalize(5),
              },
            }}
            onValueChange={(value) =>
              this.props.savePermanentItem('city', value)
            }
            items={this.props.cities}
            value={this.props.city}
            Icon={() => {
              return (
                <Feather
                  name={'chevron-down'}
                  size={normalize(16)}
                  color={Theme.colors.secondary}
                />
              );
            }}
            //onDonePress={() => console.log('onDonePress')}
          />
        </View>
        <DrawerItems {...this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: normalize(30),
  },
  picker: {
    fontSize: normalize(14),
    color: Theme.colors.black,
    paddingLeft: normalize(5),
    paddingRight: normalize(30),
    paddingVertical: normalize(5),
    borderWidth: 0.5,
    borderRadius: normalize(8),
    borderColor: Theme.colors.gray,
  },
});
const mapPropsToState = (state) => {
  return {
    city: state.permanent.city,
    cities: state.permanent.cities,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    savePermanentItem: (name, data) => dispatch(savePermanentItem(name, data)),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(DrawerContent);
