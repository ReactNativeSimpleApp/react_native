import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from './Text';


export default ProfileItem = ({name, mobile, email}) => {
    return <View>
        <UserContainer>
            <Text large heavy margin="2px 0" color="#8e93a1">
                {name}
            </Text>
            <Text medium bold margin="2px 0" color="#8e93a1">
                {mobile}
            </Text>
            <Text medium bold margin="2px 0" color="#8e93a1">
                {email}
            </Text>
        </UserContainer>
    </View>
}

const UserContainer = styled.View`
    padding: 10px;
    margin: 5px 16px;
    justify-content: center;
    border: 1px solid #8e93a1;
    border-radius: 6px;

`;