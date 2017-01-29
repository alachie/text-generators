import React    from 'react'
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router'

import App from './app'
import TextGen from './components/textGen'
import About from './components/about'
const clapChar = '👏'

const emojify = (s) => clapChar + s.trim().split(' ').join(clapChar) + clapChar;

const tootChar = (c) => {
	let n = 0
	return String.fromCharCode((n = c.charCodeAt()) == 32 ? 12288 : n + 65248);
}

const tooify = (s) => s.split('').map(tootChar).join('');

const Clap = () => (
	<TextGen processor={emojify}/>
)

const Toot = () => (
	<TextGen processor={tooify}/>
)

const _Router = () => (
	<Router history={hashHistory}>
    	<Route path="/" component={App}>
    		<IndexRedirect to="clap" />
  			<Route path="clap" component={Clap}/>
  			<Route path="toot" component={Toot}/>
  			<Route path="about" component={About}/>
    	</Route>
	</Router>
)

export default _Router