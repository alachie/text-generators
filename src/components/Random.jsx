import React, { Component } from 'react';
import emojis from '../emojis';

export default class Random extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emoji: '',
		};
		this.setRandomEmoji = this.setRandomEmoji.bind(this);
	}

	componentDidMount() {
		this.setRandomEmoji();
	}

	setRandomEmoji(e) {
		if(e) {
			e.preventDefault();
		}

		const _emoji = emojis[Math.floor(Math.random() * emojis.length)]

		this.setState({emoji: _emoji});
	}

	render() {
		return (
			<div className="random">
				<div className="output" dangerouslySetInnerHTML={{__html: this.state.emoji}}></div>
				<a href="#" className="reload" onClick={this.setRandomEmoji}>🎲</a>
			</div>
		)
	}
}