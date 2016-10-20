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
	submit: function( event ) {
		event.preventDefault();

		let form = event.target;
		this.props.onAddSubmit( form.add.value );
		form.reset();
	},

	render: function() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				{this.props.cards.map(( contents ) => (
					<Card text={contents} />
				))}
				<form onSubmit={this.submit}>
					<input name="add" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
});

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			cards: []
		};
	},

	onAddSubmit: function(value) {
		this.setState({ cards: this.state.cards.concat( value ) });
	},

	render: function() {
		return (
			<List title={this.props.title} cards={this.state.cards} onAddSubmit={this.onAddSubmit} />
		);
	}
});

var Board = React.createClass({
	render: function() {
		var cards = ["This is a card", "This is a card", "This is a card"];

		return (
			<div className="board">
				{this.props.lists.map((listTitle) => (
					<ListContainer title={listTitle} />
				))}
			</div>
		);
	}
});

document.addEventListener( 'DOMContentLoaded', function() {
	var lists = [ "To Do", "Doing", "Done" ];
	ReactDOM.render( <Board title="Trello-like board" lists={lists} />, document.getElementById( 'app' ));
});
