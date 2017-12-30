import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import FavoritesScreen from './screens/Favorites';
import VideoScreen from './screens/Video';
import { CustomDrawerContent } from './components';
import { HamburgerIcon } from './components/icons';
import { colors } from './utils/constants';

const AppMainStack = StackNavigator({
  Home: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: `Learn Yoga`,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-jet" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.headerStyle,
      },
      headerTitle: `Learn Yoga`,
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Video: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.cardBG,
  },
  mode: 'modal',
});

const AppDrawer = DrawerNavigator({
  Home: { screen: AppMainStack },
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
    />),
  contentOptions: {
    activeBackgroundColor: colors.drawerActiveBG,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.drawerInactiveColor,
  },
});

const Navigator = TabNavigator({
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default AppDrawer;
