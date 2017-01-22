const React = require('react');
const {PieChart, Pie, Legend, Cell} = require('recharts');
 
  const data = [0.8, 0.1 , 0.4, 0.6, 0.7];
  const colors = ["#ef0000", "#12961a", "#510f6d", "#f6ff02", "#0020d6"]

var PieGraph = React.createClass({
	render () {
  	return (
  		<PieChart width={700} height={300}>
		  <Pie data={this.props.data} cx="50%" cy="50%" outerRadius={80} label>
		    {
		      this.props.data.map((entry, index) => (
		        <Cell key={`cell-${index}`} fill={colors[index]}/>
		      ))
		    }
		  </Pie>
		  <Legend verticalAlign="top" height={40} />
		</PieChart>
    	
    );
  }
})


module.exports = PieGraph;