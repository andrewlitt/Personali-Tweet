var React = require('react');

var Board = require('../components/Board');

var styles = require('../styles')





var BoardContainer = React.createClass({

	getInitialState() {

		var x = [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];

		a = 	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];

		for(i=0;i<x.length;i++){

			if(x[i]==0){

			x[i] = styles.red;

		} else if(x[i]==1){

			x[i] = styles.blue;

		} else if(x[i]==2){

			x[i] = styles.yellow;

		} else if(x[i]==3){

			x[i] = styles.green;

		}

		}

		return {

			clickCount: 0,

			style: x,

			styleTrack: a

		}

	},

	getStyle(x){

		if(x==0){

			return styles.red;

		} else if(x==1){

			return styles.blue;

		} else if(x==2){

			return styles.yellow;

		} else if(x==3){

			return styles.green;

		} else{

			return styles.white;

		}

		},

	handleClick(x){

			tempStyle = this.state.style;

			tempTrack = this.state.styleTrack;

			if(Math.sign(x)==1){

				for (var i = 15; i >= 0; i--) {

					if(tempTrack[i] != 0 && typeof tempTrack[i+x] !== 'undefined'){

						console.log(x+i);

						tempTrack[i+x] = tempTrack[i] + tempTrack[i+x];

						tempTrack[i] = 0;

						tempStyle[i] = this.getStyle(tempTrack[i]);

						tempStyle[i+x] = this.getStyle(tempTrack[i+x]);

					}

				}

			} else {

				for (var i = 0; i <= 15; i++) {

					if(tempTrack[i] != 0 && typeof tempTrack[i+x] !== 'undefined'){

						console.log(x+i);

						tempTrack[i+x] = tempTrack[i] + tempTrack[i+x];

						tempTrack[i] = 0;

						tempStyle[i] = this.getStyle(tempTrack[i]);

						tempStyle[i+x] = this.getStyle(tempTrack[i+x]);

					}

				}

			}



			this.setState({

				style: tempStyle,

				styleTrack: tempTrack

			});

	},

	render() {

		console.log(this.state.styleTrack)

		return (

			<Board Click={this.handleClick} 

			clickCount={this.state.clickCount} 

			style={this.state.style}

			styleTrack={this.state.styleTrack}

			/>

		)



	}









});



module.exports = BoardContainer;