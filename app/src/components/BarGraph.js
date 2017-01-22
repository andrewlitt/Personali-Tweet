const React = require('react');
const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = require('recharts');


var BarGraph = React.createClass({
	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} layout='vertical'>
	       <XAxis type="number"/>
	       <YAxis type="category" dataKey="name"/>
	       <ReferenceLine y={0} stroke='#000'/>
	       <Legend />	       
	       <Bar dataKey="score"  />
      </BarChart>
    );
  }
})


module.exports = BarGraph;