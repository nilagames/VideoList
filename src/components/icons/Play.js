import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const IconContainer = styled.TouchableOpacity`
  flexGrow: 1;
  zIndex: 2;
  alignItems: center;
  justifyContent: center;
`;

const Play = ({ onPress }) => (
  <IconContainer onPress={onPress}>
    <Icon name="play-circle" size={60} color='white' />
  </IconContainer>
);

export default Play;
