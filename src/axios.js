import axios from 'axios';

// base url to make requsts to the movie databse 

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',

});

export default instance