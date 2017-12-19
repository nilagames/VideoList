import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import FavoritesScreen from './screens/Favorites';
import VideoScreen from './screens/Video';
import { CategoryIcon, BackIcon } from './components/icons';
import { colors } from './utils/constants';

const AppMainStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: `Categories`,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-locate" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.headerStyle,
      },
      headerTitle: `Categories`,
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <CategoryIcon onPress={() => {}} />,
    })
  },
  Video: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  CategoryVideos: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: `${ navigation.state.params.item.name }`,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-videocam" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.headerStyle,
      },
      headerTitle: `${ navigation.state.params.item.name }`,
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    }),
  },
}, {
  cardStyle: {
    backgroundColor: colors.cardBG,
  },
  mode: 'modal',
});

const Navigator = TabNavigator({
  Main: { screen: AppMainStack },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
