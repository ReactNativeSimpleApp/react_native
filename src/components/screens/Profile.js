import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from '../reusable/Text';

const Profile = ({navigation}) => {
    return (
        <View>
            <UserContainer>
                <Text title heavy margin="16px 0 18px 0" color="#fff">
                    John Doe
                </Text>

                <Text large bold margin="0 0 8px 0" color="#fff">
                    johndoe
                </Text>

                <Text medium bold margin="0 0 8px 0" color="#fff">
                    johndoe@gmail.com
                </Text>
            </UserContainer>
            
            <AdressContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">Adress:</Text>
                <Text medium bold color="#8e93a1">Street: Kulas Light</Text>
                <Text medium bold color="#8e93a1">Suite: Apt.556</Text>
                <Text medium bold color="#8e93a1">City: Gwenborough</Text>    
            </AdressContainer>

            <CompanyContainer>
                <Text medium heavy color="#8e93a1" padding="4px 0">Company:</Text>
                <Text medium bold color="#8e93a1">Romaguera-Crona</Text>
                <Text medium bold color="#8e93a1">Multi-layered client-server neural-net</Text>
            </CompanyContainer>

            <LogOut onPress={() => navigation.navigate("Gallery")}>
                <Text bold center color="#fff">Photos</Text>
            </LogOut>

            <LogOut>
                <Text bold center color="#fff">Log Out</Text>
            </LogOut>
        </View>
    );
};

export default Profile;

const UserContainer = styled.View`
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    background-color: #8e93a1;
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
    background-color: #8e93a1;
    border-radius: 6px;
`;