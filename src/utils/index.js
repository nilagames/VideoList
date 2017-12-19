import Share from 'react-native-share';
import { Linking } from 'react-native';

import config from '../../config';
import { RANDOM_COLORS } from './constants';

// gets the current screen from navigation state
export const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const shareOptions = (url, message) => {
  Share.open({
    url: url,
    message: message,
  }).catch((err) => { err && console.log(err); });
};

export const openLink = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred in opening link', err));
};

export const getColor = (i) => {
  return RANDOM_COLORS[i % RANDOM_COLORS.length];
};
