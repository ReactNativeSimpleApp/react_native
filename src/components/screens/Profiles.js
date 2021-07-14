import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from '../reusable/Text';
import ProfileItem from '../reusable/ProfileItem';

export default Profiles = ({navigation}) => {
    return (
        <View>
            <Text title heavy margin="40px 20px 10px 20px" color="#8e93a1">
                Profiles:
            </Text>
        
            <ProfileItem 
                name="John Doe"
                mobile="+123456789"
                email="johndoe@gmail.com"/> 

            <ProfileItem 
                name="Kate Smith"
                mobile="+987654321"
                email="katesmith@gmail.com"/> 

            <ProfileItem 
                name="James Brown"
                mobile="+987654721"
                email="jamesbrown@gmail.com"/> 
        </View>
    );
}