import React from 'react'
import { connect } from 'react-redux'
import { updateValue } from "../actions"

@connect((store) => {
  return {userInput: store.userInput}
})
export default class TextGen extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this)
	}

	handleKeyUp(e) {
		const value = e.target.value
		this.props.dispatch(updateValue(value))
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

	generateOutput(s) {
		const noText = '<span class="noText">🤔</span>'

		const output = this.props.processor(s)

		if(s.trim() === '') {
			return noText
		} else {
			return output
		}
	}

	render() {
		const { inputValue } = this.props.userInput
		const outputValue = this.generateOutput(inputValue)
		return (
			<div class="TextGen">
				<input class="input" onKeyUp={this.handleKeyUp} placeholder="Type Something Here ✍️" defaultValue={inputValue}></input>
				<div class="output" onClick={this.handleHighlight} dangerouslySetInnerHTML={{ __html: outputValue }}></div>
			</div>
		)
	}
}