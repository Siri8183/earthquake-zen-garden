import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data.features,
      };

    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    case actionTypes.FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        profileData: action.payload.profile,
      };
    case actionTypes.FETCH_EQ_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        eqDetailById: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
