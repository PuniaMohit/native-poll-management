import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import headerStyles from "./headerStyles";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(removeUserData());
    navigation.replace("/");
  };

  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>Poll Management</Text>
      <View style={headerStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleLogout()}
          style={headerStyles.logoutButton}
        >
          <Text style={headerStyles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
