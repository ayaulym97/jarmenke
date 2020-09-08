import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import AuthRoute from './AuthRoute';
import {Theme, SCREEN_WIDTH, normalize} from '../utils';
import {DrawerContent} from '../components';
import UrgentRequestRoute from './UrgentRequestRoute';
import RequestRoute from './RequestRoute';
import OffersRoute from './OffersRoute';
import CreateRequestRoute from './CreateRequestRoute';

const Menu = createDrawerNavigator(
  {
    Auth: {
      screen: AuthRoute,
      navigationOptions: {
        drawerLabel: 'Вход / Регистрация',
      },
    },
    CreateReaquest: {
      screen:CreateRequestRoute,
      navigationOptions: {
        drawerLabel: 'Создать заказ',
      },
    },
    UrgentRequestRoot: {
      screen: UrgentRequestRoute,
      navigationOptions: {
        drawerLabel: 'Срочные заказы',
      },
    },
    RequestRoute: {
      screen: RequestRoute,
      navigationOptions: {
        drawerLabel: 'Заказы',
      },
    },
    OffersRoute: {
      screen: OffersRoute,
      navigationOptions: {
        drawerLabel: 'Предложения',
      },
    },
  },
  {
    initialRouteName: 'Auth',
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    drawerBackgroundColor: Theme.colors.white,
    drawerPosition: 'right',
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentOptions: {
      activeTintColor: Theme.colors.green,
      inactiveTintColor: Theme.colors.black,
      labelStyle: {
        fontSize: normalize(16),
      },
    },
    contentComponent: (props) => <DrawerContent {...props} />,
  },
);

export default createAppContainer(Menu);
