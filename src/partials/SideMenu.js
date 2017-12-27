import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styled from 'styled-components/native';
import { DrawerItem } from '../components';
import { openLink, shareOptions } from '../utils';

const appDetails = {
  url: 'https://play.google.com/store/apps/details?id=com.nilagames.christmas.video.songs',
  developerUrl: 'https://play.google.com/store/apps/developer?id=Nila+Games',
  appName: 'Christmas video Songs for kids, adults & everyone',
  privacy: 'https://nilagames.github.io/policy/privacy.html',
  contact: 'mailto:gamesnila@gmail.com',
};

const SideMenu = (props) => {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    props.navigation.dispatch(navigateAction);
  }

  closeDrawer = () => {
    props.navigation.navigate('DrawerClose');
  }

  return (
    <View style={styles.sideContainer}>
      <DrawerItem icon={'md-home'} text={'Home'} onClick={this.closeDrawer} />
      <View style={styles.divider} />
      <DrawerItem icon={'md-star-half'} text={'Rate us'} onClick={() => { openLink(appDetails.url); }} />
      <DrawerItem icon={'md-share'} text={'Share our App'} onClick={() => { shareOptions(appDetails.url, appDetails.appName); }} />
      <DrawerItem icon={'md-appstore'} text={'Other Apps'} onClick={() => { openLink(appDetails.developerUrl); }} />
      <View style={styles.divider} />
      <DrawerItem icon={'md-lock'} text={'Privacy Policy'} onClick={() => { openLink(appDetails.privacy); }} />
      <DrawerItem icon={'md-mail'} text={'Contact us'} onClick={() => { openLink(appDetails.contact); }} />
    </View>
  );
};

let styles = StyleSheet.create({
  sideContainer: {
    paddingTop: 0,
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default SideMenu;
