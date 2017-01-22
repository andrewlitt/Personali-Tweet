const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph');
const BarGraph = require('../components/BarGraph');
const CloudGraph = require('../components/CloudGraph');
const FakeTweet = require('./FakeTweet');

const GraphContainer = React.createClass({
    render () {
        return Object.keys(this.props.Data).length > 0 ? (
            <div className="graphContainer">
                <RadarGraph data={this.props.Data.graphs.taxData} />
                <PieGraph data={this.props.Data.graphs.emotionData}/>
                <RadialGraph data={this.props.Data.graphs.conceptData}/>
                <BarGraph data={this.props.Data.graphs.sentimentData}/>
                <CloudGraph data={this.props.Data.graphs.keywordData}/>
				<FakeTweet picture={this.props.Data.picture} name={this.props.Data.name} username={this.props.Data.username} tweet={this.props.Data.tweet} />
            </div>
        ) : <div />;
    }
});


module.exports = GraphContainer;
