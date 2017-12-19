import React, { Component } from 'react';
import styled from 'styled-components/native';
import MasonryList from '@appandflow/masonry-list';

import { VideoList } from '../components';
import { getColor } from '../utils';
import DATA from '../data/data';

const MasonryView = styled.View`
  marginBottom: 0px;
`;

class FavoritesScreen extends Component {
  state = { isRefreshing: false };

  _refreshRequest = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  _validData = () => {
    if (this.props.navigation.state.params && this.props.navigation.state.params.item.ID) {
      return DATA[this.props.navigation.state.params.item.ID];
    } else {
      return DATA['curator'];
    }
  }

  render() {
    return (
      <MasonryView>
        <MasonryList
          onRefresh={this._refreshRequest}
          refreshing={this.state.isRefreshing}
          data={this._validData(DATA)}
          renderItem={({ item, index }) => <VideoList item={item} color={getColor(index)} cellheight={'260px'} height={'200px'} navigate={this.props.navigation.navigate} />}
          getHeightForItem={({ item }) => (260 + 2)}
          numColumns={1}
          keyExtractor={item => item.youtubeID}
        />
      </MasonryView>
    );
  }
}

export default FavoritesScreen;
