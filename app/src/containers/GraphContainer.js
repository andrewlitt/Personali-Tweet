const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph');
const BarGraph = require('../components/BarGraph');

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
    ],
    sentimentData: [
      {
	      	name: 'Purely Positive Sentiment',
	      	score: 1,
	      	fill:'#00d10d'
      },
      {
      		name: 'Purely Negative Sentiment',
      		score: -1,
      		fill:'#ff0400'},
      {
      		name: 'Sample Average Sentiment',
      		score: -0.314165,
      		fill:'#fff200'}
      ]
	};
var GraphContainer = React.createClass({
	render () {
  	return (
    	<div className="graphContainer">
				<h1>A Tweet Analysis of @USER</h1>
    		<RadarGraph data={Data.taxData} />
    		<PieGraph data={Data.emotionData}/>
    		<RadialGraph data={Data.conceptData}/>
    		<BarGraph data={Data.sentimentData}/>
    	</div>
    );
  }
})


module.exports = GraphContainer;
