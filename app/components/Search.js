import React, {Component} from 'react';
import axios from 'axios';
import {transparentBg} from '../styles';


class Search extends Component {

	constructor(props) {
		super(props);
	}

	handleChange(event) {
		// TODO Call backend for autocomplete results
	}

	handleClick(event) {
		// TODO @Colin - Use axios here
	}

	render() {
		return (
			<div className="searchBar">
				<input
					type='text'
					placeholder="Enter a Twitter Handle... ( no @ needed )"
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}

};


module.exports = Search;
