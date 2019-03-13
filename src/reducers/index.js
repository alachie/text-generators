import { combineReducers } from 'redux'

const defaultUserInput = {
	inputValue: '',
	clapChar: '👏'
}

const userInput = (state = defaultUserInput, action) => {

	switch(action.type){
		case 'UPDATE_VALUE':
			return {
				...state,
				inputValue: action.value
			}

		case 'UPDATE_CLAPCHAR':
			return {
				...state,
				clapChar: action.char
			}
		default: 
			return state
	}


}

const reducer = combineReducers({
	userInput
})

export default reducer