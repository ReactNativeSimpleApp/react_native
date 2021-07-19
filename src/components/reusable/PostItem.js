import React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import Text from './Text';

const PostItem = ({name, text}) => {
  return (
    <Container>
      <PostContainer>
        <Text large heavy margin="2px 0" color="#17a2b8">
          {name}
        </Text>
        <Text medium bold margin="2px 0" color="#8e93a1">
          {text}
        </Text>
      </PostContainer>
    </Container>
  );
};

export default PostItem;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.View`
  border: 1px solid #ccc;
  margin: 2px 0;
  box-shadow: 0 0 10px #ccc;
  background-color: #222222;
  width: 90%;
  padding: 8px;
`;
