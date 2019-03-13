import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

const Navigation = styled.nav`
    background: var(--bg-color);
	flex-grow: 0;
	flex-shrink: 0;
    flex-bias: auto;
    border-bottom: 2px solid var(--border-color);
    ul {
		list-style: none;
		margin: 0;
		padding: 0;
        display: flex;
        align-item: center;
    }
    li.spacer {
		width: 100%;
        flex: 1;
    }
    a {
		text-decoration: none;
		display: block;
		padding: 10px;
		padding-bottom: 8px;
		line-height: 30px;
		font-size: 30px;
        color: var(--fg-color);
    }

    a.active {
        background: var(--secondary-color);
    }
		
	span.emoji {
		display: block;
        margin-top: 2px;
    }

`;

export default class MainMenu extends React.Component {
	render() {
		return (
            <Navigation>
                <ul>
                    <li title="clap">
                        <NavLink to="/clap" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="clap emoji"
                            >
                                👏
                            </span>
                        </NavLink>
                    </li>
                    <li title="toot">
                        <NavLink to="/toot" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="trumpet emoji"
                            >
                                🎺
                            </span>
                        </NavLink>
                    </li>
                    <li title="b">
                        <NavLink to="/b" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="b emoji"
                            >
                                🅱️
                            </span>
                        </NavLink>
                    </li>
                    <li title="mock">
                        <NavLink to="/mock" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="sponge emoji"
                            >
                                🧽
                            </span>
                        </NavLink>
                    </li>
                    <li title="random">
                        <NavLink to="/random" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="game die emoji"
                            >
                                🎲
                            </span>
                        </NavLink>
                    </li>

                    <li className="spacer" />
                    {/* <li title="toggle light/dark mode">
                        <a href="#">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="moon emoji"
                            >
                                🌝
                            </span>
                        </a>
                    </li> */}
                    <li title="about">
                        <NavLink to="/about" activeClassName="active">
                            <span
                                className="emoji"
                                role="img"
                                aria-label="raised hand emoji"
                            >
                                🙋‍♂️
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </Navigation>
        );
	}
}
