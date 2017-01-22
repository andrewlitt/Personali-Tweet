import React, {Component} from 'react';
import axios from 'axios';
import {transparentBg} from '../styles';


class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	handleChange(event) {
		const url = `/api/search?q=${event.target.value}`;
		console.log(url);
		if(event.target.value.length > 0) {
			axios.get(url)
				.then((response) => {
					if(response) {
						this.setState({
							users: response.data
						});
					}
				})
				.catch((error) => {
					this.setState({
						users: []
					});
					console.error(error);
				});
		} else {
			this.setState({
				users: []
			});
		}
	}

	render() {
		return (
			<div className='searchBar'>
				<input
					type='text'
					placeholder="Enter a Twitter Handle... ( no @ needed )"
					onChange={this.handleChange.bind(this)}
				/>
				{this.state.users.map((user) => {
					return (
						<div>
							<p>{user.name}</p>
							<p>{user.username}</p>
							<img src={user.picture} />
						</div>
					);
				})}
			</div>
		);
	}

};


module.exports = Search;
