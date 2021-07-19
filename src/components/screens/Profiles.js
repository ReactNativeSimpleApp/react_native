import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {View} from 'react-native';

import Text from '../reusable/Text';
import ProfileItem from '../reusable/ProfileItem';

import jsonApiService from '../../services/jsonApiServise';

const Profiles = ({navigation}) => {
  const [users, setUsers] = useState([
    {
      name: '',
      id: '',
      username: '',
      email: '',
      phone: '',
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
            email: user.email,
            phone: user.phone,
          })),
        );
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <View>
        <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
          Profiles:
        </Text>
        {users.map(user => (
          <Profile
            onPress={() => navigation.navigate('Profile', {userId: user.id})}
            key={user.id}>
            <ProfileItem
              name={`${user.name}, ${user.username}`}
              mobile={user.phone}
              email={user.email}
            />
          </Profile>
        ))}
      </View>
    </Container>
  );
};

export default Profiles;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #343a40;
`;

const Profile = styled.TouchableOpacity`
  margin-top: 16px;
`;
