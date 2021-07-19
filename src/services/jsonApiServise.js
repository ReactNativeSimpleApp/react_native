import axios from './jsonApiServiseCofig';

const jsonApiService = {
  getPosts(params) {
    return axios
      .get('/posts', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
  getComments(params) {
    return axios
      .get('/comments', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
  getAlbums(params) {
    return axios
      .get('/albums', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
  getPhotos(params) {
    return axios
      .get('/photos', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
  getTodos(params) {
    return axios
      .get('/todos', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
  getUsers(params) {
    return axios
      .get('/users', {
        params: {...params},
      })
      .then(data => ({
        data,
      }))
      .catch(error => {
        Promise.reject(error);
      });
  },
};

export default jsonApiService;
