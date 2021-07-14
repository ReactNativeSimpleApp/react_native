import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from './Text';


const PostItem = ({name, text}) => {
    return <View>
        <PostContainer>
            <Text large heavy margin="2px 0" color="#8e93a1">
                {name}
            </Text>
            <Text medium bold margin="2px 0" color="#8e93a1">
                {text}
            </Text>
        </PostContainer>
    </View>
}

export default PostItem;

const PostContainer = styled.View`
    padding: 10px;
    margin: 5px 16px;
    justify-content: center;

`;