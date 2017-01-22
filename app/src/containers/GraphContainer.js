const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph')

const Data = {
		"taxData": [
        {
            "label": "/society/sex",
            "score": 0.504564
        },
        {
            "label": "/education/school",
            "score": 0.486439
        },
        {
            "label": "/art and entertainment/music",
            "score": 0.467579
        }
    ],
    "emotionData" :  [
	    {
	      "name": "anger",
	      "value": 0.816965
	    },
	    {
	      "name": "disgust",
	      "value": 0.110467
	    },
	    {
	      "name": "fear",
	      "value": 0.001633
	    },
	    {
	      "name": "joy",
	      "value": 0.0089
	    },
	    {
	      "name": "sadness",
	      "value": 0.169935
	    }
	  ]
	};

var GraphContainer = React.createClass({
	render () {
  	return (
    	<div>
    		<RadarGraph data={Data.taxData} />
    		<PieGraph data={Data.emotionData}/>
    	</div>
    );
  }
})


module.exports = GraphContainer;