import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { CachedImage } from "react-native-img-cache";

class Avatar extends PureComponent {
  render() {
    const { image } = this.props;

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
