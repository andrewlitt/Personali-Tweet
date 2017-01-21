var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Search(props){
		return (
			<div className="searchBar">
				<input type='text' placeholder="Enter a Twitter Handle... ( no @ needed )" />
			</div>
		)
};


module.exports = Search;
