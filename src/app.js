import React    from 'react'
import MainMenu from './components/MainMenu'
import Footer   from './components/Footer'
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';

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

class App extends React.Component {
	render() {
		return (
			<StyledApp id="App" theme="dark">
				<RenderHelement pathname={this.props.location.pathname}/>	
				<MainMenu/>
				<div id="AppChild">
					{this.props.children}
				</div>
				<Footer/>
			</StyledApp>
		)
	}
}

const RenderHelement = (props) => {
	let title = "txt.lachie.co";
	let favicon = "/clap.png";

	switch (props.pathname) {
        case "/clap":
            title = "Clap";
            favicon = "/clap.png";
            break;
        case "/toot":
            title = "Toot";
            favicon = "/toot.png";
            break;
        case "/b":
            title = "B";
            favicon = "/b.png";
            break;
        case "/mock":
            title = "Mocking Spongebob";
            favicon = "/sponge.png";
            break;
        case "/random":
            title = "Random Emoji";
            favicon = "/die.png";
            break;
		case "/about":
			title = "About";
			favicon = "/about.png";
			break;
        default:
            break;
    }

	return (
        <Helmet>
            <title>{title} - txt.lachie.co</title>
			<link href={favicon} rel="shortcut icon" />
        </Helmet>
    );
}

const AppWithRouter = withRouter(props => <App {...props}/>)

export default AppWithRouter;;
