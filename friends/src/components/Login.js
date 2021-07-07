import React from 'react';
import Loader from 'react-loader-spinner'


import { axiosWithAuth } from '../utils/axiosWithAuth';
class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			credentials: {
				username: '',
				password: ''
			}
		};
	}
	handleChange = (event) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[event.target.name]: event.target.value
			}
		});
		console.log(this.state.credentials);
    };

    // returns a token to be added to the header of all other requests
    // Pass in the following credentials as the body of the request: : { username: 'Lambda School', password: 'i<3Lambd4' }
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ ...this.state, isLoading: true });
		axiosWithAuth()
			.post('/api/login', this.state.credentials)
			.then((res) => {
				console.log(res);
				window.localStorage.setItem('token', res.data.payload);
				this.setState({ ...this.state, isLoading: false });
				this.props.history.push('/Friends-List');
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name="username" onChange={this.handleChange} />
					<input name="password" onChange={this.handleChange} />
					<button>Login</button>
				</form>
				{this.state.isLoading && <div><Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /></div>}
			</div>
		);
	}
}

export default Login
