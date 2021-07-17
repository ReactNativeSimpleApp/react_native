import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {View, ScrollView} from 'react-native';

import Text from '../reusable/Text';

import PostItem from '../reusable/PostItem';
import jsonApiService from '../../services/jsonApiServise';

export default Home = ({navigation}) => {
  const [posts, setPosts] = useState([
    {
      name: '',
      id: '',
      username: '',
    },
  ]);
  const [users, setUsers] = useState([
    {
      userId: '',
      title: '',
      id: '',
    },
  ]);
  useEffect(() => {
    jsonApiService
      .getUsers()
      .then(data => {
        setUsers(
          data.data.data.map(user => ({
            name: user.name,
            id: user.id,
            username: user.username,
          })),
        );
        console.log(users);
        let us = users.filter(user => {
          return user.id === 1;
        });
        console.log(us);
      })
      .catch(err => {
        console.error(err);
      });
    jsonApiService
      .getPosts()
      .then(data => {
        setPosts(
          data.data.data.map(post => ({
            userId: post.userId,
            title: post.title,
            id: post.id,
          })),
        );
        console.log(posts);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <View>
        <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
          Posts:
        </Text>
        {posts.map(item => (
          <Post onPress={() => navigation.navigate('Post')} key={item.id}>
            <PostItem
              name={`${
                users.filter(user => {
                  return user.id === item.userId;
                })[0].name
              }, ${
                users.filter(user => {
                  return user.id === item.userId;
                })[0].username
              }`}
              text={`${item.title}`}
            />
          </Post>
        ))}
        <PostItem name="Kate Smith" text="Great app!" />

        <PostItem name="James Brown" text="Hi there! How are you?" />
      </View>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: #343a40;
`;

const Post = styled.TouchableOpacity`
  margin-top: 16px;
`;
