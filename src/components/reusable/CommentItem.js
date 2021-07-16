import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import Text from './Text';


const CommentItem = ({name, text}) => {
    return <Container>
        <CommentContainer>
            <Text large heavy margin="2px 0" color="#17a2b8">
                {name}
            </Text>
            <Text medium bold margin="2px 0" color="#8e93a1">
                {text}
            </Text>
        </CommentContainer>
    </Container>
}

export default CommentItem;

const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

const CommentContainer = styled.View`
    border-left-width: 1px; 
    border-left-color: #17a2b8;
    margin:6px 0;
    width:90%;
    padding:8px;
`;

