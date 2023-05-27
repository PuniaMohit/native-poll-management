import LoginPage from "./components/Login/login";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <View>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </View>
  );
}
