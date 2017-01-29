import { combineReducers } from 'redux'

const defaultUserInput = {
	inputValue: ''
}

const userInput = (state = defaultUserInput, action) => {

	switch(action.type){
		case 'UPDATE_VALUE':
			return {
				...state,
				inputValue: action.value
			}
		default: 
			return state
	}


}

const reducer = combineReducers({
	userInput
})

export default reducer