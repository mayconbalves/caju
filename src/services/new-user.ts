import axios from "axios";

export const createNewUser = (params: any) => {
	const headers = {
		'Content-Type': 'application/json'
	}

	axios.post('http://localhost:3000/registrations', params, {
		headers
	}).then(response => console.log(response))
}
