import Axios from 'axios';

const Instance = Axios.create({
    baseURL: 'http://localhost:3000/data'
});

export default Instance;