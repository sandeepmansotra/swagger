import { SET_USERNAME } from "../actions/types";
import { combineReducers } from "redux";
import isEmpty from "../utils/is-empty";
import { GET_ERRORS, SET_USER_NAME } from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: {}
};

function searchUsername(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
const initialStates = {
  names: {}
};

function userName(state = initialStates, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, names: action.payload };
    default:
      return state;
  }
}

const initialStatess = {
  errors: {}
};
function errorReducer(state = initialStatess, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
const rootReducers = combineReducers({
  names: userName,
  user: searchUsername,
  errors: errorReducer
});
export default rootReducers;
