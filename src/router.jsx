import React    from 'react'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'

import App from './app'
import TextGen from './components/textGen'
import About from './components/about'

const emojify = (s, options) => {
  const { clapChar } = options
  return clapChar + s.trim().split(' ').join(clapChar) + clapChar;
}

const tootChar = (c) => {
	let n = 0
	return String.fromCharCode((n = c.charCodeAt()) == 32 ? 12288 : n + 65248);
}

const bChar = (c) => c.replace('b', '🅱️');

const splitmap = (s, func) => s.split('').map(func).join('');

const tooify = (s) => splitmap(s, tootChar);

const b = (s) => splitmap(s, bChar);

const Clap = () => (
	<TextGen processor={emojify}/>
)

const Toot = () => (
	<TextGen processor={tooify}/>
)

const B = () => (
  <TextGen processor={b}/>
)

const _Router = () => (
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRedirect to="clap" />
  			<Route path="clap" component={Clap}/>
  			<Route path="toot" component={Toot}/>
        <Route path="b" component={B}/>
  			<Route path="about" component={About}/>
    	</Route>
	</Router>
)

export default _Router