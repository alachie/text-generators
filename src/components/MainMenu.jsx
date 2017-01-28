import React from 'react'
import { Link } from 'react-router'

export default class MainMenu extends React.Component {
	render() {
		return (
			<nav className="MainMenu">
				<ul>
					<li title="clap"><Link to="clap" activeClassName="active"><span className="emoji">👏</span></Link></li>
					<li title="toot"><Link to="toot" activeClassName="active"><span className="emoji">🎺</span></Link></li>
					<li className="spacer"></li>
					<li title="about"><Link to="about" activeClassName="active"><span className="emoji">🙋‍♂️</span></Link></li>
				</ul>
			</nav>
		)
	}
}