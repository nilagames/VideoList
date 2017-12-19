import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import FavoritesScreen from './screens/Favorites';
import VideoScreen from './screens/Video';
import { CategoryIcon } from './components/icons';
import { colors } from './utils/constants';

const AppMainStack = StackNavigator({
  Home: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: `Merry Chirstmas`,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-jet" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.headerStyle,
      },
      headerTitle: `Merry Chirstmas`,
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
