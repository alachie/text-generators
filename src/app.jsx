import React    from 'react'
import MainMenu from './components/MainMenu'
import Footer   from './components/Footer'

export default class App extends React.Component {
	render() {
		return (
			<div id="App">
				<MainMenu/>
				<div id="AppChild">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		)
	}
}