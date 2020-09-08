import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UrgentRequest from '../screens/app/urgentRequest';
import {Logo, MenuBtn} from '../components';


const UrgentRequestRoute = createStackNavigator(
  {
    UrgentRequest: {
      screen: UrgentRequest,
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

        headerRight: <MenuBtn onPress={() => navigation.toggleDrawer()} />,
      };
    },
    initialRouteName: 'UrgentRequest',
  },
);

export default UrgentRequestRoute;
