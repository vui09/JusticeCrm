import axios from "axios";

const instanse = axios.create({baseURL: 'http://localhost:5000/'})


export const auth = {
	registration: (user)=> instanse.post('api/auth/register', user),
	login: (user) => instanse.post('api/auth/login', user)

}
