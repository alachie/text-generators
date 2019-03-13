import React    from 'react'
import MainMenu from './components/MainMenu'
import Footer   from './components/Footer'

import styled, {css} from 'styled-components';

const StyledApp = styled.div`
    background: var(--secondary-color);
    ${props =>
        props.theme === "dark" &&
        css`
            --bg-color: #000;
            --fg-color: #fff;
            --secondary-color: #2b2b2b;
            --border-color: #2b2b2b;
        `}
`;

export default class App extends React.Component {
	render() {
		return (
			<StyledApp id="App" theme="dark">
				<MainMenu/>
				<div id="AppChild">
					{this.props.children}
				</div>
				<Footer/>
			</StyledApp>
		)
	}
}
