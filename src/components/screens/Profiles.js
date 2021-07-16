import React from 'react';
import styled from 'styled-components';

import { View, ScrollView } from 'react-native';

import Text from '../reusable/Text';
import ProfileItem from '../reusable/ProfileItem';

export default Profiles = ({navigation}) => {
    return (
        <Container>
            <View>
                <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
                    Profiles:
                </Text>
            
                <Profile onPress={() => navigation.navigate("Profile")}>
                    <ProfileItem 
                        name="John Doe"
                        mobile="+123456789"
                        email="johndoe@gmail.com"/> 
                </Profile>

                <ProfileItem 
                    name="Kate Smith"
                    mobile="+987654321"
                    email="katesmith@gmail.com"/> 

                <ProfileItem 
                    name="James Brown"
                    mobile="+987654721"
                    email="jamesbrown@gmail.com"/> 
            </View>
        </Container>
    );
}

const Container = styled.ScrollView`
    flex: 1;
    background-color: #343a40;
`;

const Profile = styled.TouchableOpacity`
    margin-top: 16px;
`;