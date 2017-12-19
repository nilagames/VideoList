import React, { PureComponent } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { CachedImage } from "react-native-img-cache";

import { PlayIcon } from './icons';

const CellView = styled.View`
  margin: 5px;
  marginBottom: 0px;
  backgroundColor: ${props => props.color};
  height: ${props => props.height};
  elevation: 10;
  borderRadius: 3;
  overflow: hidden;
  minWidth: 320px;
`;
const TitleText = styled.Text`
  marginTop: 5px;
  fontSize: 20;
  marginLeft: 10px;
  marginRight: 10px;
  color: ${props => props.theme.WHITE};
`;
const SourceText = styled.Text`
  fontSize: 11px;
  marginLeft: 10px;
  marginRight: 10px;
  color: ${props => props.theme.WHITE};
`;
const ImageContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: ${props => props.height};
`;

class VideoList extends PureComponent {
  render() {
    const { item, height, color, cellheight, navigate } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => navigate('Video', { videoID: item.youtubeID })}>
        <CellView {...item} height={cellheight} color={color}>
          <ImageContainer height={height}>
            <View style={styles.overlay}>
              <PlayIcon onPress={() => navigate('Video', { videoID: item.youtubeID })} />
            </View>
            <CachedImage source={{uri : item.image}} resizeMode="stretch"
              style={styles.thumbnail}
            />
          </ImageContainer>
          <TitleText>{item.name}</TitleText>
          <SourceText>{item.source}</SourceText>
        </CellView>
      </TouchableWithoutFeedback>
    );
  }
};

var styles = StyleSheet.create({
  thumbnail: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    zIndex: 1,
  }
});

export default VideoList;
