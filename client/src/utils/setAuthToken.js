import axios from 'axios'

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authirozation'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authirozation'];
    }
}

export default setAuthToken;