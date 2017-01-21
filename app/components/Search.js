import React, {Component} from 'react';
import {transparentBg} from '../styles';
class Search extends Component {

	constructor(props) {
		super(props);
	}

	handleChange(event) {
		
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
