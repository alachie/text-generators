import React, { Component } from 'react';
import emojis               from '../emojis';
import ClipboardButton      from 'react-clipboard.js'
import he                   from 'he'

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

	copySuccess() {
		alert('copied!');
	}

	render() {
		return (
			<div className="random">
				<div className="output">
					<ClipboardButton data-clipboard-text={he.decode(this.state.emoji)} onSuccess={this.copySuccess}>
						<span dangerouslySetInnerHTML={{ __html: this.state.emoji }}></span>
					</ClipboardButton>		
				</div>
				<a href="#" className="reload" onClick={this.setRandomEmoji}>🎲</a>
			</div>
		)
	}
}