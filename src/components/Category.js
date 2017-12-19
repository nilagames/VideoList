import React, { PureComponent } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import { CachedImage } from "react-native-img-cache";

const CellView = styled.View`
  margin: 5px;
  marginBottom: 0px;
  backgroundColor: ${props => props.color};
  height: ${props => props.height};
  elevation: 10;
  borderRadius: 3;
  overflow: hidden;
`;
const TitleText = styled.Text`
  textAlign: center;
  fontSize: 24;
  marginTop: 10;
  color: ${props => props.theme.WHITE};
`;
const ImageContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: ${props => props.height};
`;

class Category extends PureComponent {
  render() {
    const { item, height, color, cellheight, navigate } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => navigate('CategoryVideos', { item: item })}>
        <CellView {...item} height={cellheight} color={color}>
          <ImageContainer height={height}>
            <View style={styles.overlay}>
            </View>
            <CachedImage source={{uri : item.image}} resizeMode="stretch"
              style={styles.thumbnail}
            />
          </ImageContainer>
          <TitleText>{item.name}</TitleText>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    zIndex: 1,
  }
});

export default Category;
