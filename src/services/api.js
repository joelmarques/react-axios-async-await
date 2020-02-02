import axios from 'axios';

const api = axios.create({

    //baseURL: 'http://localhost:8080/api/v1',
    timeout: 6000,
    headers: {'Authorization' : 'Basic YWRtaW46bmltZGE='}
    
});

export default api;