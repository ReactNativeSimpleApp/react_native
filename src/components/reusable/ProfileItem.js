import React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import Text from './Text';

const ProfileItem = ({name, mobile, email}) => {
  return (
    <Container>
      <UserContainer>
        <Text large heavy margin="2px 0" color="#17a2b8">
          {name}
        </Text>
        <Text medium bold margin="2px 0" color="#8e93a1">
          {mobile}
        </Text>
        <Text medium bold margin="2px 0" color="#8e93a1">
          {email}
        </Text>
      </UserContainer>
    </Container>
  );
};

export default ProfileItem;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const UserContainer = styled.View`
  flex: 1;
  border: 1px solid #ccc;
  margin: 2px 0;
  box-shadow: 0 0 10px #ccc;
  background-color: #222222;
  width: 90%;
  padding: 8px;
`;
