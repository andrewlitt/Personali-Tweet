const React = require('react');
const {PieChart, Pie, Legend, Cell,ResponsiveContainer} = require('recharts');

  const data = [0.8, 0.1 , 0.4, 0.6, 0.7];
  const colors = ["#ef0000", "#12961a", "#510f6d", "#cc00cc", "#0020d6"]

var PieGraph = React.createClass({
	render () {
  	return (
      <div className="graph">
        <h3>Plot Title</h3>
        <ResponsiveContainer width={"100%"} height="90%">
      		<PieChart>
    		  <Pie data={this.props.data} cx="50%" cy="50%" outerRadius={'50%'} label>
    		    {
    		      this.props.data.map((entry, index) => (
    		        <Cell key={`cell-${index}`} fill={colors[index]}/>
    		      ))
    		    }
    		  </Pie>
    		  <Legend verticalAlign="bottom" height={40} />
    		</PieChart>
        </ResponsiveContainer>
      </div>

    );
  }
})


module.exports = PieGraph;
