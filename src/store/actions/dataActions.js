import * as actionTypes from './actionTypes';

export const fetchDataStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchUserDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchEqDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_EQ_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    return fetch('./data.json')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

export const fetchUserData = () => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    return fetch('./data.json')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchUserDataSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};
export const fetchEqDetailById = (id) => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    return fetch('../data.json')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const eq = json.data.features.filter((e) => e.id === id)[0];
        dispatch(fetchEqDataSuccess(eq));
        return eq;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
