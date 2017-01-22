const React = require('react');
const RadarGraph = require('../components/RadarGraph');

const radarData =  [
    {
      "emotion": "anger",
      "score": 0.816965
    },
    {
      "emotion": "disgust",
      "score": 0.110467
    },
    {
      "emotion": "fear",
      "score": 0.001633
    },
    {
      "emotion": "joy",
      "score": 0.0089
    },
    {
      "emotion": "sadness",
      "score": 0.169935
    }
  ];

const GraphContainer = React.createClass({
	render () {
  	return (
    	<div>
    		<RadarGraph data={radarData} />
    	</div>
    );
  }
})


module.exports = GraphContainer;