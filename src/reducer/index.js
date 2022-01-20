import data from '../data';

import { FETCH_START, FETCH_SUCCESS } from '../actions';

const initialState = {
    activities: data,
    loading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                activities: action.payload,
                loading: false,
                error: '',
            };
        default:
            return state;
    }
};

export default reducer;
