import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator, HeaderBackButton} from 'react-navigation';
import {Logo, MenuBtn, CustomIcon} from '../components';

import {Theme, normalize, SCREEN_WIDTH} from '../utils';
import CreateRequest from '../screens/app/createRequest';

const CreateRequestRoute = createStackNavigator(
  {
    CreateReaquest: {
      screen: CreateRequest,
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
    initialRouteName: 'CreateReaquest',
  },
);

export default CreateRequestRoute;
