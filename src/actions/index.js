export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchStart = () => {
    return ({type: FETCH_START})
};

export const fetchSuccess = (activities) => {
    return ({type: FETCH_SUCCESS, payload: activities})
};

