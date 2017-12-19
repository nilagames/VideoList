import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

const CellView = styled.View`
  margin: 5px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.color};
  height: ${props => props.height};
  elevation: 10;
  borderRadius: 3;
`;

const TitleText = styled.Text`
  fontSize: 24;
  color: ${props => props.theme.WHITE};
`;

class Cell extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <CellView {...item}>
        <TitleText>{item.text}</TitleText>
      </CellView>
    );
  }
};

export default Cell;
