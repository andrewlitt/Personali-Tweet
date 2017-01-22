const React = require('react');
const RadarGraph = require('../components/RadarGraph');
const PieGraph = require('../components/PieGraph');
const RadialGraph = require('../components/RadialGraph');
const BarGraph = require('../components/BarGraph');
const CloudGraph = require('../components/CloudGraph');
const FakeTweet = require('../components/FakeTweet');

const GraphContainer = React.createClass({
    render () {
        return Object.keys(this.props.Data).length > 0 ? (
            <div className="graphContainer">
								<h1>An Analysis of Tweets From @{this.props.Data.username}</h1>
								<BarGraph data={this.props.Data.graphs.sentimentData}/>
                <PieGraph data={this.props.Data.graphs.emotionData}/>
                <RadialGraph data={this.props.Data.graphs.conceptData}/>
                <RadarGraph data={this.props.Data.graphs.taxData} />
                <CloudGraph data={this.props.Data.graphs.keywordData}/>
				<FakeTweet 
                    picture={this.props.Data.picture}
                    name={this.props.Data.name}
                    username={this.props.Data.username}
                    tweet={this.props.Data.tweet}
                    updateTweet={this.props.updateTweet}
                />
            </div>
        ) : <div />;
    }
});


module.exports = GraphContainer;
