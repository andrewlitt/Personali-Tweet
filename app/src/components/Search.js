import React, {Component} from 'react';
import axios from 'axios';


class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			inputText: []
		}
	}

	handleChange(event) {
		const url = `/api/search?q=${event.target.value}`;
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
		this.setState({inputText:event.target.value});
	}

	handleClick(event) {
		const url = `/api/user/${event.currentTarget.id}`;
		this.props.startAnimation();
		this.setState({
			users: [],
			inputText: [],
		});
		axios.get(url)
			.then((response) => {
				if(response) {
					console.log(response);
					this.props.updatePersonalityData(response.data);
				}
			})	
			.catch((error) => {	
				console.error(error);
			})
	}

	render() {
		return (
			<div className='searchBar'>
				<input
				  value={this.state.inputText}
					type='text'
					placeholder="Enter a Twitter Handle... ( no @ needed )"
					onChange={this.handleChange.bind(this)}
				/>
				<div className="results">
					{this.state.users.map((user) => {
						return (
							<div className="searchResult"
									 key={user.username}
									 onClick={this.handleClick.bind(this)}
									 id={user.username}
							>
								<img src={user.picture} />
								<div>
									<h1>{user.name}</h1>
									<p>@{user.username}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

module.exports = Search;
