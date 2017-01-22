const React = require('react');
const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} = require('recharts');


var BarGraph = React.createClass({
	render () {
  	return (
			<div className="graph">
			    <h3>Plot Title</h3>
					<ResponsiveContainer width={"100%"} height="90%">
				    	<BarChart data={this.props.data}
				            margin={{top: 5, right: 30, left: 20, bottom: 5}} layout='vertical'>
					       <XAxis type="number"/>
					       <YAxis type="category" dataKey="name"/>
					       <ReferenceLine y={0} stroke='#000'/>
					       <Legend />
					       <Bar dataKey="score"  />
				      </BarChart>
					</ResponsiveContainer>
			</div>
    );
  }
})


module.exports = BarGraph;
