import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REMOVE_USER_DATA,
  USER_DETAILS_LOCAL_STORAGE,
} from "../../constants";
import api from "../../../utils/api";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await api.post("/user/login", userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data,
    });
  }
};

export const removeUserData = () => (dispatch) => {
  dispatch({ type: REMOVE_USER_DATA });
};

export const userDetailsFromLocalStorage = (userDetails) => (dispatch) => {
  dispatch({ type: USER_DETAILS_LOCAL_STORAGE, payload: userDetails });
};
