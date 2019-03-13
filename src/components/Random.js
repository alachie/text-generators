import React, { Component } from 'react';
import emojis               from '../emojis';
import ClipboardButton      from 'react-clipboard.js'
import he                   from 'he'

import styled from "styled-components";

const StyledRandom = styled.div`
    width: 100%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    text-align: center;

    .output,
    .reload {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .output {
        height: 75%;
        flex: 1;
        span {
            font-size: 100px;
            @media (max-width: 500px) {
                font-size: 80px;
            }
        }
    }

    button {
        appearance: none;
        border: none;
        border-radius: none;
        outline: none;
        cursor: pointer;
        background: transparent;
        color: var(--fg-color);
    }

    .reload {
        color: white;
        text-decoration: none;
        font-size: 40px;
        background: var(--bg-color);
        flex-grow: 1;
    }

    .reload:hover {
        background: var(--secondary-color);
    }

    .reload:active {
        background: var(--bg-color);
    }
    .output .showingCopied {
        font-size: 4rem;
        user-select: none;
        color: var(--fg-color);
    }
`;

export default class Random extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emoji: '',
			isShowingCopied: false,
		};
		this.setRandomEmoji = this.setRandomEmoji.bind(this);
		this.copySuccess = this.copySuccess.bind(this);
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
		var tempEmoji = this.state.emoji;
		this.setState({
			emoji: "✂️ Copied!",
            isShowingCopied: true,
        });

		setTimeout(() => {
			this.setState({
                emoji: tempEmoji,
                isShowingCopied: false,
            });
		}, 250);
	}

	render() {
		const { isShowingCopied} = this.state;
		return (
            <StyledRandom>
                <div className="output">
                    {!isShowingCopied ? (
                        <ClipboardButton
                            data-clipboard-text={he.decode(
                                this.state.emoji
                            )}
                            onSuccess={this.copySuccess}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: this.state.emoji
                                }}
                            />
                        </ClipboardButton>
                    ) : (
                        <span
                            className="showingCopied"
                            dangerouslySetInnerHTML={{
                                __html: this.state.emoji
                            }}
                        />
                    )}
                </div>
                <button
                    className="reload"
                    onClick={this.setRandomEmoji}
                >
                    <span role="img" aria-label="game die emoji">
                        🎲
                    </span>
                </button>
            </StyledRandom>
        );
	}
}
