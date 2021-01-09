import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID cmVekEj4q0ejRVXyzVSdhqFlsnEnWcc-F0Mfx5uJNow'
    }
});
