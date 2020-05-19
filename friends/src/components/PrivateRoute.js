import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Create a <PrivateRoute /> component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token
const PrivateRoute = ({ component: Component, ...rest }) => {
	const token = window.localStorage.getItem('token');
	return (
		<Route
			{...rest}
			render={(props) => {
				if (token) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
