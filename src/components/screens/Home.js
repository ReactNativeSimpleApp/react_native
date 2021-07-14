import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from '../reusable/Text';
import PostItem from '../reusable/PostItem';

export default Home = ({navigation}) => {
    return (
        <View>
            <Text title heavy margin="40px 20px 10px 20px" color="#8e93a1">
                Posts:
            </Text>
        
            <PostItem 
                name="John Doe"
                text="Hello there!"/> 

            <PostItem 
                name="Kate Smith"
                text="Great app!"/>

            <PostItem 
                name="James Brown"
                text="Hi there! How are you?"/>
        </View>
    );
}
