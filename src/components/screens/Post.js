import React from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import Text from '../reusable/Text';
import CommentItem from '../reusable/CommentItem';

const Post = ({...props}) => {
  return (
    <Container>
      <PostContainer>
        <PostHeader>
          <Text title heavy margin="4px 2px" color="#17a2b8">
            John Doe
          </Text>
        </PostHeader>
        <Text large bold margin="4px 4px" color="#8e93a1">
          Hiii!
        </Text>
      </PostContainer>
      <CommentContainer>
        <CommentItem name="Kate Smith" text="Hello there!" />
        <CommentItem name="James Brown" text="Hello there!" />
      </CommentContainer>
    </Container>
  );
};

export default Post;

const Container = styled.View`
  flex: 1;
  background-color: #343a40;
`;

const PostContainer = styled.View`
  margin: 2px 0 12px 0;
  padding: 8px;
`;

const PostHeader = styled.View`
  margin: 2px 0;
  border-bottom-width: 1px;
  border-bottom-color: #17a2b8;
`;

const CommentContainer = styled.View`
  display: flex;
  align-items: stretch;
  margin-left: 10%;
`;
