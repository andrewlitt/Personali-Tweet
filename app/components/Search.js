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
			<div>
				<input 
					type='text'
					onChange={this.handleChange.bind(this)}
				/>
				<button
					type='button'
					className=''
					onClick={this.handleClick.bind(this)}
				> Search </button>
			</div>
		);
	}

};


module.exports = Search;
