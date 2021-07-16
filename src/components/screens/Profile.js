import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from '../reusable/Text';

const Profile = ({...props}) => {
    return (
        <Container>
            <UserContainer>
                <Text title heavy margin="16px 0 18px 0" color="#17a2b8">
                    {/* {props.name} */}
                    John Doe
                </Text>

                <Text large bold margin="0 0 8px 0" color="#8e93a1">
                    {/* {props.username} */}
                    johndoe
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {/* {props.email} */}
                    johndoe@gmail.com
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {/* {props.phone} */}
                    +123456789
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#8e93a1">
                    {/* {props.website} */}
                    google.com
                </Text>
            </UserContainer>
            
            <AdressContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">Adress:</Text>
                <Text medium bold color="#8e93a1">
                    {/* {props.adress.street} */}
                    Lenina
                </Text>
                <Text medium bold color="#8e93a1">
                    {/* {props.adress.suit} */}
                    456
                </Text>
                <Text medium bold color="#8e93a1">
                    {/* {props.adress.city} */}
                    NY
                </Text>    
            </AdressContainer>

            <CompanyContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">Company:</Text>
                <Text medium bold color="#8e93a1">
                    {/* {props.company.name} */}
                    GOOGLE
                </Text>
                <Text medium bold color="#8e93a1">
                    {/* {props.company.catchPhrase} */}
                    lalalala lalala la
                </Text>
            </CompanyContainer>

            <LogOut>
                <Text bold center color="#17a2b8">Log Out</Text>
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
    borderBottomWidth: 1px;
    borderBottomColor: #17a2b8;
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