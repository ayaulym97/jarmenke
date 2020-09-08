import React from 'react';
import {createStackNavigator, HeaderBackButton} from 'react-navigation';

import {Login, Register, ForgotPassword} from '../screens/auth';
import {Logo, MenuBtn} from '../components';

import {Theme} from '../utils';

const AuthRoute = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <HeaderBackButton
              tintColor={Theme.colors.black}
              onPress={() => navigation.goBack()}
            />
          ),
        };
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <HeaderBackButton
              tintColor={Theme.colors.black}
              onPress={() => navigation.goBack()}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerTitle: <Logo />,
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          marginLeft: 20,
        },

        headerRight: <MenuBtn onPress={() => navigation.toggleDrawer()} />,
      };
    },
    initialRouteName: 'Login',
  },
);

export default AuthRoute;
