import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Text from '../reusable/Text';
import jsonApiService from '../../services/jsonApiServise';

const Profile = ({route}) => {
    const [user, setUser] = useState([
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
        .getUsers({id: route.params.userId})
        .then(data => {
            setUser(
            data.data.data.map(user => ({
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                website: user.website,
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                companyName: user.company.name,
                companyCatchPhrase: user.company.catchPhrase,
            })),
            );
            console.log(user);
        })
        .catch(err => {
            console.error(err);
        });
  }, []);

    return (
        <Container>
            <UserContainer>
                <Text title heavy margin="16px 0 18px 0" color="#17a2b8">
                    {user[0].name}
                </Text>

                <Text large bold margin="0 0 8px 0" color="#8e93a1">
                    {user[0].username}
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {user[0].email}
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {user[0].phone}
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {user[0].website}
                </Text>
            </UserContainer>

            <AdressContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">
                    Adress:
                </Text>
                <Text medium bold color="#8e93a1">
                    {user[0].street}
                </Text>
                <Text medium bold color="#8e93a1">
                    {user[0].suite}
                </Text>
                <Text medium bold color="#8e93a1">
                    {user[0].city}
                </Text>
            </AdressContainer>

            <CompanyContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">
                    Company:
                </Text>
                <Text medium bold color="#8e93a1">
                    {user[0].companyName}
                </Text>
                <Text medium bold color="#8e93a1">
                    {user[0].companyCatchPhrase}
                </Text>
            </CompanyContainer>

            <LogOut>
                <Text bold center color="#17a2b8">
                    Log Out
                </Text>
            </LogOut>
        </Container>
    );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: #343a40;
`;

const UserContainer = styled.View`
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #17a2b8;
  background-color: #222222;
`;

const AdressContainer = styled.View`
  align-items: center;
  margin-top: 16px;
`;

const CompanyContainer = styled.View`
  align-items: center;
  margin-top: 16px;
`;

const LogOut = styled.TouchableOpacity`
  bottom: -120px;
  margin: 10px 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  border-radius: 6px;
`;
