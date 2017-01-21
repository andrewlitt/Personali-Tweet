import React, {Component} from 'react';
import {transparentBg} from '../styles';

class Search extends Component {

	constructor(props) {
		super(props);
	}

	handleClick(event) {
		console.log('click');
	}

	render() {
		return (
			<div>
				<input type='text' />
				<button type='button' className='' onClick={this.handleClick.bind(this)}> Search </button>
			</div>
		);
	}

};


module.exports = Search;

