import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MasonryList from '@appandflow/masonry-list';
import styled from 'styled-components/native';

import { Category } from '../components';
import CATEGORIES from '../data/categories.json';
import { getColor } from '../utils';

const MasonryView = styled.View`
  marginBottom: 0px;
`;

class HomeScreen extends Component {
  state = { isRefreshing: false };

  _refreshRequest = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  render() {
    return (
      <MasonryView>
        <MasonryList
          onRefresh={this._refreshRequest}
          refreshing={this.state.isRefreshing}
          data={CATEGORIES}
          renderItem={({ item, index }) => <Category item={item} color={getColor(index)} cellheight={'240px'} height={'180px'} navigate={this.props.navigation.navigate} />}
          getHeightForItem={({ item }) => (240 + 2)} // item.height from sample
          numColumns={1}
          keyExtractor={item => item.ID}
        />
      </MasonryView>
    );
  }
}

export default HomeScreen;
