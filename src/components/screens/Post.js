import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Text from '../reusable/Text';
import CommentItem from '../reusable/CommentItem';
import jsonApiService from '../../services/jsonApiServise';

const Post = ({route}) => {
  const [user, setUser] = useState([
    {
      name: '',
      username: '',
    },
  ]);
  const [comments, setComments] = useState([
    {
      email: '',
      body: '',
    },
  ]);
  useEffect(() => {
    jsonApiService
      .getUsers({id: route.params.userId})
      .then(data => {
        setUser(
          data.data.data.map(user => ({
            name: user.name,
            username: user.username,
          })),
        );
      })
      .catch(err => {
        console.error(err);
      });
    jsonApiService
      .getComments({postId: route.params.postId})
      .then(data => {
        setComments(
          data.data.data.map(comment => ({
            email: comment.email,
            body: comment.body,
          })),
        );

        console.log(comments);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <PostContainer>
        <PostHeader>
          <Text title heavy margin="4px 2px" color="#17a2b8">
            {user[0].name}, {user[0].username}
          </Text>
        </PostHeader>
        <Text large bold margin="4px 4px" color="#8e93a1">
          {route.params.postTitle}
        </Text>
      </PostContainer>
      <CommentContainer>
        {comments.map(comment => (
          <CommentItem
            name={comment.email}
            text={comment.body}
            key={comment.email}
          />
        ))}
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
