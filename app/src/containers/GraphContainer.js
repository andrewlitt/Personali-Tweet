const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph');
const BarGraph = require('../components/BarGraph');
const CloudGraph = require('../components/CloudGraph');

const GraphContainer = React.createClass({
    render () {
        return Object.keys(this.props.Data).length > 0 ? (
            <div className="graphContainer">
                <RadarGraph data={this.props.Data.graphs.taxData} />
                <PieGraph data={this.props.Data.graphs.emotionData}/>
                <RadialGraph data={this.props.Data.graphs.conceptData}/>
                <BarGraph data={this.props.Data.graphs.sentimentData}/>
                <CloudGraph data={this.props.Data.graphs.keywordData}/>
								<FakeTweet picture={this.props.personalityData.picture} name={this.props.personalityData.name} username={this.props.personalityData.username} tweet={this.props.personalityData.tweet} />
            </div>
        ) : <div />;
    }
});


module.exports = GraphContainer;
