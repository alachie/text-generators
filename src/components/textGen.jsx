import React           from 'react'
import { connect }     from 'react-redux'
import { updateValue } from "../actions"
import ClipboardButton from 'react-clipboard.js'

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

	generateOutput(s) {
		const noText = '<span class="noText">🤔</span>'

		const output = this.props.processor(s, {
			clapChar: this.props.userInput.clapChar
		})

		return (s.trim() === '') ? noText : output;
	}

	copySuccess() {
		alert('copied!');
	}

	render() {
		const { inputValue } = this.props.userInput
		const outputValue = this.generateOutput(inputValue)
		const clibpoardDisable = (outputValue === '<span class="noText">🤔</span>')
		return (
			<div class="TextGen">
				<input class="input" onKeyUp={this.handleKeyUp} placeholder="Type Something Here ✍️" defaultValue={inputValue}/>	
				<div class="output" >
					<ClipboardButton data-clipboard-text={outputValue} onSuccess={this.copySuccess}>
						<span dangerouslySetInnerHTML={{ __html: outputValue }}></span>
					</ClipboardButton>		
				</div>
			</div>
		)
	}
}