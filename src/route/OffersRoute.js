import React from 'react';
import {createStackNavigator, HeaderBackButton} from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import Offers from '../screens/app/Offers';
import {Logo,MenuBtn, CustomIcon} from '../components';

import {Theme, normalize, SCREEN_WIDTH} from '../utils';

const OffersRoute = createStackNavigator(
  {
    Offers: {
      screen: Offers,
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

        headerRight: (
          <TouchableOpacity
            style={{marginRight: SCREEN_WIDTH * 0.04}}
            onPress={() => navigation.toggleDrawer()}>
            <CustomIcon
              name="menu"
              color={Theme.colors.black}
              size={normalize(16)}
            />
          </TouchableOpacity>
        ),
      };
    },
    initialRouteName: 'Offers',
  },
);

export default OffersRoute;
