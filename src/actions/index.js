import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getActivities = () => {
  return (dispatch) => {
    dispatch(fetchStart);
    axios
        .get('https://www.boredapi.com/api/activity')
        .then((resp) => {
            dispatch(fetchSuccess(resp.data));
        });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (activities) => {
  return { type: FETCH_SUCCESS, payload: activities };
};
