import LoginPage from "./components/Login/login";
import SignUpPage from "./components/Signup/signUp";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "../store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
 </Provider>
  );
}
