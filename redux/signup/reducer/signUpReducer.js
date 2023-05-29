import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  REMOVE_SUCCESS_SIGNUP_MESSAGE,
  REMOVE_ERROR_SIGNUP_MESSAGE,
} from "../../constants";

const initialState = {
  userRegister: "",
  loading: false,
  error: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userRegister: action.payload };
    case USER_REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_SUCCESS_SIGNUP_MESSAGE:
      return { ...state, userRegister: "" };
    case REMOVE_ERROR_SIGNUP_MESSAGE:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default signUpReducer;
