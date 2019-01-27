import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'AccessControlAllowOrigin': '*'
    }
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;