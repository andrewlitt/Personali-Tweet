const React = require('react');
const {RadialBarChart, RadialBar, Legend} = require('recharts');
    
  const style = {
  	top: 0,
  	left: "75%",
  	lineHeight: '30px'
  };
var RadialGraph = React.createClass({
	render () {
  	return (
    	<RadialBarChart width={700} height={290} cx="50%" cy="50%" innerRadius={20} outerRadius={140} barSize={10} data={this.props.data}>
		        <RadialBar minAngle={15} label background clockWise={true} dataKey='relevance'/>
		        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
  }
})


module.exports = RadialGraph;