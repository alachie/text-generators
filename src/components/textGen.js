import React           from 'react'
import { connect }     from 'react-redux'
import { updateValue } from "../actions"
import ClipboardButton from 'react-clipboard.js'
import styled from "styled-components";

const StyledTextGen = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    flex-grow: 1;
    max-width: 100%;
    color: var(--fg-color);
    background: var(--secondary-color);

    input,
    .output,
    .output span {
        flex: 1;
        font-size: 40px;

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    input {
        border: none;
        outline: none;
        padding: 20px;
        font-family: sans-serif;
        border-radius: 0;
        text-align: center;
        background: var(--bg-color);
        color: var(--fg-color);
    }

    .output {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow-y: auto;
        overflow-x: hidden;
        word-wrap: break-word;
        overflow-wrap: break-word;
        margin-top: 10px;
        user-select: all;
    }
    button {
        border: 0;
        background: transparent;
        outline: none;
        color: inherit;
        font: inherit;
    }
    .showingCopied {
        font-size: 4rem;
        user-select: none;
        color: var(--fg-color);
    }
`;

class TextGen extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isShowingCopied: false,
        }
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.copySuccess = this.copySuccess.bind(this);
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
        
        this.setState({
            isShowingCopied: true
        });

        setTimeout(() => {
            this.setState({
                isShowingCopied: false
            });
        }, 250);
	}

	render() {
        const { inputValue } = this.props.userInput
        const { isShowingCopied } = this.state;
		const outputValue = this.generateOutput(inputValue)
		const clibpoardDisable = (outputValue === '<span class="noText">🤔</span>')
		return (
            <StyledTextGen>
                <input
                    class="input"
                    onChange={this.handleKeyUp}
                    placeholder="Type Something Here ✍️"
                    defaultValue={inputValue}
                />
                <div class="output">
                    {!isShowingCopied ? (
                        <ClipboardButton
                            data-clipboard-text={outputValue}
                            onSuccess={this.copySuccess}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: outputValue
                                }}
                            />
                        </ClipboardButton>
                    ) : (
                        <span className="showingCopied">✂️Copied!</span>
                    )}
                </div>
            </StyledTextGen>
        );
	}
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(TextGen);
