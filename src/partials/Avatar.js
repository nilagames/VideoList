import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { CachedImage } from "react-native-img-cache";

class Avatar extends PureComponent {
  render() {
    let image = 'https://img.youtube.com/vi/i_HthOzKsis/mqdefault.jpg';

    return (
      <CachedImage source={{ uri : image }} resizeMode="stretch"
        style={styles.thumbnail}
      />
    );
  }
};

let styles = StyleSheet.create({
  thumbnail: {
    height: 200,
  }
});

export default Avatar;
