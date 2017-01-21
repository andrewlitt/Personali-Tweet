var React = require('react');

var PropTypes = React.PropTypes;

var styles = require('../styles');





function Board(props) {

	return (
			<div>
				<div> 
					<h1 style={styles.fontG}> Click the boxes! </h1> 
					<h2 style={styles.fontG}> {props.styleTrack} </h2> <br />
					<button className="btn" style={props.style[0]} onClick={() => props.Click(0)}>{props.styleTrack[0]}</button>
					<button className="btn" style={props.style[1]} onClick={() => props.Click(1)}>{props.styleTrack[1]}</button>
					<button className="btn" style={props.style[2]} onClick={() => props.Click(2)}>{props.styleTrack[2]}</button>
					<button className="btn" style={props.style[3]} onClick={() => props.Click(3)}>{props.styleTrack[3]}</button>
					<br />
					<button className="btn" style={props.style[4]} onClick={() => props.Click(4)}>{props.styleTrack[4]}</button>
					<button className="btn" style={props.style[5]} onClick={() => props.Click(5)}>{props.styleTrack[5]}</button>
					<button className="btn" style={props.style[6]} onClick={() => props.Click(6)}>{props.styleTrack[6]}</button>
					<button className="btn" style={props.style[7]} onClick={() => props.Click(7)}>{props.styleTrack[7]}</button>
					<br />
					<button className="btn" style={props.style[8]} onClick={() => props.Click(8)}>{props.styleTrack[8]}</button>
					<button className="btn" style={props.style[9]} onClick={() => props.Click(9)}>{props.styleTrack[9]}</button>
					<button className="btn" style={props.style[10]} onClick={() => props.Click(10)}>{props.styleTrack[10]}</button>
					<button className="btn" style={props.style[11]} onClick={() => props.Click(11)}>{props.styleTrack[11]}</button>
					<br />
					<button className="btn" style={props.style[12]} onClick={() => props.Click(12)}>{props.styleTrack[12]}</button>
					<button className="btn" style={props.style[13]} onClick={() => props.Click(13)}>{props.styleTrack[13]}</button>
					<button className="btn" style={props.style[14]} onClick={() => props.Click(14)}>{props.styleTrack[14]}</button>
					<button className="btn" style={props.style[15]} onClick={() => props.Click(15)}>{props.styleTrack[15]}</button>
				 </div>
				 <div>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(-1)}>Left</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(-4)}>Up</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(4)}>Down</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(1)}>Right</button>
				 </div>
			</div>
		)
};





module.exports = Board;