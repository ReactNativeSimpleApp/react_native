import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, ScrollView } from 'react-native';

import Text from '../reusable/Text';

import PostItem from '../reusable/PostItem';

export default Home = ({navigation}) => {
    return (
        <Container>
            <View>
                <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
                    Posts:
                </Text>
                <Post onPress={() => navigation.navigate("Post")}>
                    <PostItem 
                        name="John Doe"
                        text="Hello there!"/> 
                </Post>
                <PostItem 
                    name="Kate Smith"
                    text="Great app!"/>

                <PostItem 
                    name="James Brown"
                    text="Hi there! How are you?"/>
            </View>
        </Container>
    );
}

const Container = styled.ScrollView`
    flex: 1;
    background-color: #343a40;
`;


const Post = styled.TouchableOpacity`
    margin-top: 16px;
`;
