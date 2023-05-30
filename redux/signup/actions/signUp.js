import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  REMOVE_SUCCESS_SIGNUP_MESSAGE,
  REMOVE_ERROR_SIGNUP_MESSAGE,
} from "../../constants";
import api from "../../../utils/api";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const data = await api.post("/user/register", userData);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.data.message,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const removeSuccessSignUpMessage = () => (dispatch) => {
  dispatch({ type: REMOVE_SUCCESS_SIGNUP_MESSAGE });
};
export const removeErrorSignUpMessage = () => (dispatch) => {
  dispatch({ type: REMOVE_ERROR_SIGNUP_MESSAGE });
};
