require('./styles/style.sass')

import React    from 'react'
import ReactDOM from 'react-dom'

import _Router from './router'

ReactDOM.render(
	<_Router/>, 
	document.getElementById('__root')
)
