import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signInValidateForm } from "../../utils/formValidate";
import { signInHandleBlur } from "../../utils/formValidate";
import { login } from "../../redux/login/actions/login";
import styles from "./loginStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const dispatch = useDispatch();
  const successOrErrorMessage = useSelector((state) => state.login);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const submit = (event) => {
    signInValidateForm(event, formData, setFormErrors, dispatch, login);
  };
  const handleBlur = (value, name) => {
    signInHandleBlur(value, name, formErrors, setFormErrors);
  };

  const inputValueChange = (text, event) => {
    setFormData({ ...formData, [event]: text });
  };
  useEffect(() => {
    const { user, error } = successOrErrorMessage;
    if (user) {
      const fetchData = async () => {
        try {
          await AsyncStorage.setItem("user", JSON.stringify(user));
          console.log("stored"); //console just to show data is stored
        } catch (error) {
          console.log("async error", error); // console just to show error
        }
      };
      fetchData();
    } else if (error) {
      const errorMessage = error.message;
      setFormErrors((prevState) => ({
        emailError:
          errorMessage === "user data not found"
            ? "user data not found"
            : prevState.emailError,
        passwordError:
          errorMessage === "password is incorrect"
            ? "password is incorrect"
            : prevState.passwordError,
      }));
    }
  }, [successOrErrorMessage]);
  return (
    <View style={styles.container}>
      <View style={styles.signupForm}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.formGroup}>
          <Text>Email Address</Text>
          <TextInput
            style={styles.input}
            name="email"
            onEndEditing={(text) => handleBlur(text, "email")}
            onChangeText={(text) => inputValueChange(text, "email")}
            placeholder="Enter your email address"
          />
          <Text style={styles.errorMessage}>{formErrors.emailError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            name="password"
            onEndEditing={(text) => handleBlur(text, "password")}
            onChangeText={(text) => inputValueChange(text, "password")}
            placeholder="Enter your password"
          />
        </View>
        <Text style={styles.errorMessage}>{formErrors.passwordError}</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submit}
          disabled={successOrErrorMessage.loading}
        >
          <Text style={styles.buttonText}>
            {successOrErrorMessage.loading ? "Loading..." : "Submit"}
          </Text>
        </TouchableOpacity>
        <View style={styles.signupLinkContainer}>
          <Text style={styles.signupLink}>No Account?</Text>
          <TouchableOpacity
            style={styles.signupLink}
            // onPress={() => navigation.navigate('Signup')}..commented as will use later
          >
            <Text style={styles.signupLinkText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
