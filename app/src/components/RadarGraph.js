const React = require('react');
const {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} = require('recharts');


var RadarGraph = React.createClass({
	render () {
  	return (
        <div className="graph">
          <h3>Taxonomy</h3>
          <ResponsiveContainer width={"100%"} height="90%">
          	<RadarChart data={this.props.data} outerRadius="70%">
                <Radar name="Taxonomy" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                <Legend verticalAlign="bottom"/>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <PolarRadiusAxis/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
    );
  }
})
module.exports = RadarGraph;
