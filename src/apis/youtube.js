import axios from 'axios';

const KEY = 'AIzaSyB-7AmjLCWkwI9_JLbqrv2O2i1gSCwhmQw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
