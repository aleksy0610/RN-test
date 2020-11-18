import {
	SET_FIRST_SCREEN_DATA,
	SET_SECOND_SCREEN_DATA,
	SET_THIRD_SCREEN_DATA,
	SET_FOURTH_SCREEN_DATA
} from '../type';

const initialState = {
	firstScreen: [],
	secondScreen: [],
	thirdScreen: [],
	fourthScreen: []
}

export default function DataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_FIRST_SCREEN_DATA:
			return {
				...state,
				firstScreen: action.data
			}
		case SET_SECOND_SCREEN_DATA:
			return {
				...state,
				secondScreen: action.data
			}
		case SET_THIRD_SCREEN_DATA:
			return {
				...state,
				thirdScreen: action.data
			}
		case SET_FOURTH_SCREEN_DATA:
			return {
				...state,
				fourthScreen: action.data
			}
		default:
			return state;
	}
}