import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
`;

const DrawerContainer = styled.View`
  flex: 8;
`;

const AvatarContainer = styled.View`
  flex: 3;
  top: 10;
  alignItems: center;
  justifyContent: center;
`;

const Avatar = styled.View`
  width: 120;
  height: 120;
  borderRadius: 60;
  backgroundColor: ${props => props.theme.avatar};
`;

const ItemContainer = styled.View`
  flex: 6;
`;

const CustomDrawerContent = (props) => {
  console.log(props);
  const { navigate } = props.navigation;
  return (
    <ContainerView>
      <DrawerContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <ItemContainer>
          <View onPress={() => navigate('Favorites')}>
            <Text>Home</Text>
          </View>
        </ItemContainer>
      </DrawerContainer>
    </ContainerView>
  );
};

export default CustomDrawerContent;
