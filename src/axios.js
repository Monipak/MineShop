import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    logIn(userInfo){
        return apiClient.post('/api/users/login',userInfo)
    },
    register(userInfo){
        return apiClient.post('/api/users/register',userInfo)
    }
}