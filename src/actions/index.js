import axios from "axios";
import { SET_USER_NAME, SET_USERNAME, GET_ERRORS } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => dispatch => {
  const url = `https://app.api.convin.ai/domains/availability?name=${userData.name}/`;
  axios
    .get(url)
    .then(res => {
      if (res.data.available === true) {
        axios
          .post("https://app.api.convin.ai/domains/", userData)
          .then(res => history.push("/register"))
          .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          );
      }
      dispatch({
        type: SET_USER_NAME,
        payload: res.data
      });
    })
    .catch(err => console.log(err.name));
};

export const registerUsers = (userData, history) => dispatch => {
  const url = `https://${userData.username}.app.api.convin.ai/persons/create_admin/`;
  console.log(url);
  axios
    .post(url, userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const loginUser = userData => dispatch => {
  const url = `https://${userData.username}.app.api.convin.ai/persons/jwt_token/`;
  console.log(url, userData.username);
  axios
    .post(url, userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err));
};

export const setCurrentUser = decoded => {
  return {
    type: SET_USERNAME,
    payload: decoded
  };
};
