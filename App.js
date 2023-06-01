import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userDetailsFromLocalStorage } from "./redux/login/actions/login";
import LoginPage from "./app/components/Login/login";
import SignUpPage from "./app/components/Signup/signUp";
import PollList from "./app/components/PollList/pollList";
import store from "./store";

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("user");
        if (value !== null) {
          const userDetails = JSON.parse(value);
          dispatch(userDetailsFromLocalStorage(userDetails));
        }
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="PollList" component={PollList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  S;
}
