import React   from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";


import App     from './app'
import TextGen from './components/textGen'
import About   from './components/about'

import Random from "./components/Random";

const emojify = (s, options) => {
  const { clapChar } = options
  return clapChar + s.trim().split(' ').join(clapChar) + clapChar;
}

const tootChar = (c) => {
	let n = 0
	return String.fromCharCode((n = c.charCodeAt()) == 32 ? 12288 : n + 65248);
}

const splitmap   = (s, func) => s.split('').map(func).join('');

const tooify     = (s) => s.split('').map(tootChar).join('');

const bButtonify = (s) => s.split(' ').map(bWord).join(' ');
const bWord     = (c) => {
  if(c.length > 2) {
    let split = c.split('');
    split[0]  = '🅱️';
    return bChar(split.join(''));
  } else {
    return bChar(c);
  }
}

const bChar = (c) => c.split('').map((s) => s.replace('b', '🅱️')).join('');

function tweak(c) {
  return Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase();
}
const Mockify = (s) => s.split("").map(tweak).join("");


const Clap    = () => <TextGen processor={emojify}/>
const Toot    = () => <TextGen processor={tooify}/>
const BButton = () => <TextGen processor={bButtonify}/>
const Mock = () => <TextGen processor={Mockify} />

const _Router = () => (
	<Router>
    	<App>
        <Route exact path="/" render={() => (
          <Redirect to="/clap" />
        )} />
  			<Route path="/clap" component={Clap}/>
  			<Route path="/toot" component={Toot}/>
        <Route path="/b" component={BButton}/>
        <Route path="/mock" component={Mock}/>
        <Route path="/random" component={Random}/>
  			<Route path="/about" component={About}/>
    </App>
	</Router>
)

export default _Router
