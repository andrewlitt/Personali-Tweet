var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Search(props){
		return (
			<div>
				<input type='text' />
				<button type='button' className='' onClick={() => props.handleClick()}> Search </button>
			</div>
		)
};


module.exports = Search;
