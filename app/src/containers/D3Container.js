const React = require('react');

function D3Container(props) {
	return props.isHidden ? <div /> :(
		<div> GRAPHS N SHIT </div>
	)
};

module.exports = D3Container;