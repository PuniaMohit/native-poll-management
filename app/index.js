import LoginPage from "./components/Login/login";
// import SignUpPage from "./components/Signup/signup";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "../store";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <Provider store={store}>
      <Stack.Navigator>
        {/* <LoginPage /> */}
        <Stack.Screen name="" component={LoginPage} />
        {/* <SignUpPage/> */}
        </Stack.Navigator>
      </Provider>
    </View>
  );
}
