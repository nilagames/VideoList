import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { shareOptions, openLink } from '../utils';

class FloatingAction extends PureComponent {
  render() {
    return (
      <ActionButton fixNativeFeedbackRadius={true} buttonColor="rgba(229, 57, 53, 1)">
        <ActionButton.Item buttonColor="#1ABC9C" title="Rate the App" onPress={() => { openLink('https://play.google.com/store/apps/details?id=com.nilagames.preschool.learning.songs'); }}>
          <Icon name="md-star-half" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#5FCADB" title="Share App" onPress={() => { shareOptions('https://play.google.com/store/apps/details?id=com.nilagames.preschool.learning.songs', 'Kids learning ABC, numbers, preschool video songs'); }}>
          <Icon name="md-share" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
};

const styles = StyleSheet.create({
  actionContainer: {
    elevation: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default FloatingAction;
