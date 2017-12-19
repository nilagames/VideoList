import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { VideoList } from '../components';

const CategoryView = styled.View`
  marginTop: 10px;
  marginBottom: 10px;
`;
const CategoryTitle = styled.Text`
  fontSize: 16;
  fontWeight: bold;
  marginLeft: 10px;
  marginRight: 10px;
  alignSelf: flex-start;
  color: ${props => props.theme.textColor};
`;

class VideoCategory extends Component {
  render() {
    return (
      <CategoryView>
        <CategoryTitle>{this.props.text.toUpperCase()}</CategoryTitle>
        <FlatList
          data={this.props.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <VideoList item={item} height={'140px'} navigate={this.props.navigate} />}
          horizontal={true}
        />
      </CategoryView>
    );
  }
};

export default VideoCategory;
