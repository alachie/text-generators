require('./styles/style.sass')

import React    from 'react'
import ReactDOM from 'react-dom'

import _Router from './router'
import reducer from './reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<_Router/>
	</Provider>, 
	document.getElementById('__root')
)
