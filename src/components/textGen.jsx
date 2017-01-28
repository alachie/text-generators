import React from 'react'

export default class TextGen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '<span class="noText">🤔</span>'
		}
		this.handleKeyUp = this.handleKeyUp.bind(this)
	}

	handleKeyUp(e) {
		const value = e.target.value

		this.setState({
			value: this.props.processor(value)
		})

	}

	handleHighlight(e) {	
		if (document.selection) {
	        var range = document.body.createTextRange();
	        range.moveToElementText(e.target);
	        range.select();
	    } else if (window.getSelection) {
	        var range = document.createRange();
	        range.selectNodeContents(e.target);
	        window.getSelection().addRange(range);
		}
	}

	render() {
		return (
			<div class="TextGen">
				<input class="input" onKeyUp={this.handleKeyUp} placeholder="Type Something Here ✍️"></input>
				<div class="output" onClick={this.handleHighlight} dangerouslySetInnerHTML={{ __html: this.state.value }}></div>
			</div>
		)
	}
}