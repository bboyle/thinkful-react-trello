var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var Card = React.createClass({
	render: function() {
		return (
			<div className="card">
				{this.props.text}
			</div>
		);
	}
});

var List = React.createClass({
	render: function() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				{this.props.cards.map((contents) => (
					<Card text={contents} />
				))}
			</div>
		);
	}
});

var Board = React.createClass({
	render: function() {
		var cards = ["This is a card", "This is a card", "This is a card"];

		return (
			<div className="board">
				{this.props.lists.map((listTitle) => (
					<List title={listTitle} cards={cards} />
				))}
			</div>
		);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var lists = ["To Do", "Doing", "Done"];
	ReactDOM.render(<Board title="Trello-like board" lists={lists} />, document.getElementById('app'));
});
