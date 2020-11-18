import { 
	SET_FIRST_SCREEN_DATA,
	SET_SECOND_SCREEN_DATA,
	SET_THIRD_SCREEN_DATA,
	SET_FOURTH_SCREEN_DATA
} from '../type';

import {
	sendDataAPI
} from '../../services';

const sendData = (data) => {
	return () => {
		return sendDataAPI(data)
			.then((data) => {
				if (data.data) {
					return data.data
				} else throw new Error(data.message);
			})
			.catch(error => {
				throw new Error(error)
			})
	}
};

const setFirstScreenData = (data) => {
	return (dispatch) => {
		return dispatch({
			type: SET_FIRST_SCREEN_DATA,
			data: data
		});
	}
};

const setSecondScreenData = (data) => {
	return (dispatch) => {
		return dispatch({
			type: SET_SECOND_SCREEN_DATA,
			data: data
		});
	}
};

const setThirdScreenData = (data) => {
	return (dispatch) => {
		return dispatch({
			type: SET_THIRD_SCREEN_DATA,
			data: data
		});
	}
};

const setFourthScreenData = (data) => {
	return (dispatch) => {
		return dispatch({
			type: SET_FOURTH_SCREEN_DATA,
			data: data
		});
	}
};

export {
	sendData,
	setFirstScreenData,
	setSecondScreenData,
	setThirdScreenData,
	setFourthScreenData
}