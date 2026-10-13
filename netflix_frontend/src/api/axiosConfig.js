import axios from 'axios';

export default axios.create({
    baseURL:'http://13.48.130.226:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
