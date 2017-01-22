import React, {Component} from 'react';

class Spinner extends Component {

	render() {
		return (
			<div className='spinner'>
				<div>
					<i className='fa fa-spinner fa-spin fa-3x fa-fw' />
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);
	}

}

module.exports = Spinner;