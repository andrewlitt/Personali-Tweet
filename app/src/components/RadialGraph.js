const React = require('react');
const {RadialBarChart, RadialBar, Legend,ResponsiveContainer} = require('recharts');

  const style = {
  	top: 0,
  	left: "75%",
  	lineHeight: '30px'
  };
var RadialGraph = React.createClass({
	render () {
  	return (
            <div className="graph">
                <h3>Plot Title</h3>
                <ResponsiveContainer width={"100%"} height="90%">
              	   <RadialBarChart outerRadius={'70%'} barSize={10} data={this.props.data}>
          		        <RadialBar minAngle={15} label background clockWise={true} dataKey='relevance'/>
          		        <Legend iconSize={10} width={120} height={140} layout='horizontal' verticalAlign='bottom' wrapperStyle={style}/>
                  </RadialBarChart>
                </ResponsiveContainer>
            </div>
    );
  }
})


module.exports = RadialGraph;
