const React = require('react');
const {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis} = require('recharts');


var RadarGraph = React.createClass({
	render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={200} width={600} height={500} data={this.props.data}>
          <Radar name="Emotions" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Legend verticalAlign="top" height={36} />
          <PolarGrid />
          <PolarAngleAxis dataKey="emotion" />
          <PolarRadiusAxis/>
        </RadarChart>
    );
  }
})


module.exports = RadarGraph;