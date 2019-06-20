import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-app-pub.herokuapp.com/'
});
