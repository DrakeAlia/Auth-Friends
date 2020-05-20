import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	constructor() {
		super();
		this.state = { friends: [] };
	}
	componentDidMount() {
		this.getFriendsList();
    }

    // returns the list of friends 
	getFriendsList = () => {
		
		axiosWithAuth()
			.get('/api/friends')
			.then((res) => {
				console.log(res);
				this.setState({ friends: res.data });
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<div>
				Friends List:
				{this.state.friends.map((friend) => <div>{`${friend.name}, ${friend.age} years old`}</div>)}
			</div>
		);
	}
}

export default FriendsList;
