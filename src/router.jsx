import React    from 'react'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'

import App from './app'
import TextGen from './components/textGen'
import About from './components/about'

const noText = '<span class="noText">🤔</span>'

const emojify = function(s) {
	const clapChar = '👏'

	if(s.trim() === '') {
        return noText
    } else {
        return clapChar + s.trim().split(' ').join(clapChar) + clapChar
    }
}
const tootChar = (c) => {
	let n = 0
	return String.fromCharCode((n = c.charCodeAt()) == 32 ? 12288 : n + 65248);
}

const tooify = (s) => {
	if(s.trim() === '') {
        return noText
    } else {
        return s.split('').map(tootChar).join('');	
    }
}

const Clap = () => (
	<TextGen processor={emojify}/>
)

const Toot = () => (
	<TextGen processor={tooify}/>
)

const _Router = () => (
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRedirect to="clap" />
  			<Route path="clap" component={Clap}/>
  			<Route path="toot" component={Toot}/>
  			<Route path="about" component={About}/>
  			
    	</Route>
	</Router>
)

export default _Router