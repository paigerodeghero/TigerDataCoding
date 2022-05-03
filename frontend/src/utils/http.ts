import axios from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

instance.interceptors.request.use(
	function (config) {
		const accessToken = localStorage.getItem('accessToken');
		if (config.headers) {
			config.headers['Authorization'] = 'Bearer ' + accessToken;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(resp) => {
		return resp;
	},
	(err) => {
		let resp = err.response;
		if (!resp) {
			localStorage.clear();

			if (window.location.pathname !== '/login-signup') {
				window.location.pathname = '/login-signup';
				alert(
					'Unable to connect to the server at this moment. Please try again.'
				);
			}
		} else if (
			resp.status === 401 &&
			window.location.pathname !== '/login-signup'
		) {
			window.location.pathname = '/login-signup';
		} else if (resp.status === 403) {
			if (resp.data) alert(resp.data);
			else alert('Permission Denied!');

			if (window.location.pathname !== '/register') {
				window.location.pathname = '/';
			}
		}

		return Promise.reject(err);
	}
);

const http = {
	get: instance.get,
	post: instance.post,
};

export default http;
