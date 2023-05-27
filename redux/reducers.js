import { combineReducers } from "redux";
import loginReducer from "./login/reducer/loginReducer";
import signUpReducer from "./signup/reducer/signUpReducer";

const reducers = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,

});

export default reducers;
