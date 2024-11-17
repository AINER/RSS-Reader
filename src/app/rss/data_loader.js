import axios from 'axios';

export default (url) => axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
  .then((response) => {
    if (response.status === 200) return response.data.contents;
    throw new Error('Network response was not 200 OK');
  });
