import React from 'react';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => ((word.value-0.65)* 300);
const rotate = word => (Math.random()*90 - 45);
 

var CloudGraph = React.createClass({
	render () {
  	return (
			<div className="clouds">
    	 <WordCloud
		    data={this.props.data}
		    fontSizeMapper={fontSizeMapper}
		    rotate={rotate}
			width={700}
		  />
		</div>
    );
  }
});


module.exports = CloudGraph;
