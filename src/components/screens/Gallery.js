import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GridImageView from 'react-native-grid-image-viewer';

import Text from '../reusable/Text';
import jsonApiService from '../../services/jsonApiServise';

const Gallery = ({route}) => {
  route = {
    params: {
      userId: 1,
    },
  };
  const [photosToShow, setPhotosToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const photos = [];
    jsonApiService
      .getAlbums({userId: route.params.userId})
      .then(alb => {
        alb.data.data.forEach(album => {
          jsonApiService
            .getPhotos({albumId: album.id})
            .then(pht => {
              pht.data.data.forEach(photo => {
                photos.push(photo.thumbnailUrl);
              });
            })
            .catch(err => {
              console.error(err);
            });
        });
        setPhotosToShow(photos);
        setIsLoading(false);
        console.log(photosToShow);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  if (isLoading) {
    return (
      <Container>
        <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
          Photo gallery:
        </Text>
        <Text title margin="40px 20px 10px 20px" color="#17a2b8">
          {' '}
          Loading ...
        </Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <Text title heavy margin="40px 20px 10px 20px" color="#17a2b8">
          Photo gallery:
        </Text>
        <GridImageView data={photosToShow} />
      </Container>
    );
  }
};

export default Gallery;

const Container = styled.View`
  flex: 1;
  background-color: #343a40;
`;
