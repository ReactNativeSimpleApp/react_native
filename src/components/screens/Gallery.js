import React from 'react';
import styled from 'styled-components';

import { View, StyleSheet } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

import Text from '../reusable/Text';

const Gallery = ({navigation}) => {
  return (
        <Container>
            <Text title heavy margin="40px 20px 10px 20px" color="#8e93a1">Photos</Text>
           <GridImageView data={[ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqe5muqrlSXq3ZbIf5sRlU-VXoN3MNCUUhQ&usqp=CAU', 
           'https://image3.mouthshut.com/images/imagesp/925791837s.jpg', 
           'https://9to5mac.com/wp-content/uploads/sites/6/2016/11/15-touch-bar-macbook-pro-tips-and-tricks1.jpg?quality=82&strip=all', 
           'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80']} />
        </Container>
  );
};

const Container = styled.View`
    flex: 1;
`;

export default Gallery;