const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph')

const Data = {
		"taxData": [
        {
            label: "/society/sex",
            score: 0.504564
        },
        {
            label: "/education/school",
            score: 0.486439
        },
        {
            label: "/art and entertainment/music",
            score: 0.467579
        }
    ],
    emotionData :  [
	    {
	      name: "anger",
	      value: 0.816965
	    },
	    {
	      name: "disgust",
	      value: 0.110467
	    },
	    {
	      name: "fear",
	      value: 0.001633
	    },
	    {
	      name: "joy",
	      value: 0.0089
	    },
	    {
	      name: "sadness",
	      value: 0.169935
	    }
	  ],
	  conceptData: [
        {
            name: "Profanity",
            relevance: 0.944193,
            fill: '#8884d8'
        },
        {
            name: "Itty Bitty Titty Committee",
            relevance: 0.623601,
            fill: '#83a6ed'
        },
        {
            name: "Going-to future",
            relevance: 0.605498,
            fill:'#8dd1e1'
        },
        {
            name: "Casual relationship",
            relevance: 0.540619,
            fill:'#82ca9d'
        },
        {
            name: "Shall and will",
            relevance: 0.531116,
            fill:'#a4de6c'
        },
        {
            name: "Eddie Money",
            relevance: 0.505722,
            fill: '#d0ed57'
        }
    ]
	};

var GraphContainer = React.createClass({
	render () {
  	return (
    	<div>
    		<div> Filler <br /> </div>
    		<RadarGraph data={Data.taxData} />
    		<PieGraph data={Data.emotionData}/>
    		<RadialGraph data={Data.conceptData}/>
    	</div>
    );
  }
})


module.exports = GraphContainer;