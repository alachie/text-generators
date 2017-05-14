import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

@connect((store) => {
  return {clapChar: store.userInput.clapChar}
})
export default class MainMenu extends React.Component {
	render() {
		return (
			<nav className="MainMenu">
				<ul>
					<li title="clap"><Link to="clap" activeClassName="active"><span className="emoji">{this.props.clapChar}</span></Link></li>
					<li title="toot"><Link to="toot" activeClassName="active"><span className="emoji">🎺</span></Link></li>	
					<li title="b"><Link to="b" activeClassName="active"><span className="emoji">🅱️</span></Link></li>
					<li title="random"><Link to="random" activeClassName="active"><span className="emoji">🎲</span></Link></li>
					
					<li className="spacer"></li>
					<li title="about"><Link to="about" activeClassName="active"><span className="emoji">🙋‍♂️</span></Link></li>
				</ul>
			</nav>
		)
	}
}