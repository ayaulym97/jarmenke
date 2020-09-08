import React from 'react';
import {createStackNavigator, HeaderBackButton} from 'react-navigation';

import Request from '../screens/app/Request';
import Offer from '../screens/app/Request/Offer';
import {Logo, MenuBtn} from '../components';

import {Theme} from '../utils';

const RequestRoute = createStackNavigator(
  {
    Request: {
      screen: Request,
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
    Offer: {
      screen: Offer,
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
    }
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerTitle: <Logo />,
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },

        headerRight: <MenuBtn onPress={() => navigation.toggleDrawer()} />,
      };
    },
    initialRouteName: 'Request',
  },
);

export default RequestRoute;
