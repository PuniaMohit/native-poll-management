import { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  signUpHandleBlur,
  signUpValidateForm,
} from "../../../utils/formValidate";
import {
  register,
  removeSuccessSignUpMessage,
  removeErrorSignUpMessage,
} from "../../../redux/signup/actions/signUp";
import roleList from "../../../redux/rolelist/actions/roleList";
import styles from "./signupStyles";
import { Dropdown } from "react-native-element-dropdown";

const SignUpPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roleList.roleList);
  const successOrErrorMessage = useSelector((state) => state.signUp);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    roleId: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    passwordError: "",
    emailError: "",
    roleError: "",
  });
  const submit = () => {
    signUpValidateForm(formData, setFormErrors, dispatch, register);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (name) => {
    signUpHandleBlur(formData, name, formErrors, setFormErrors);
  };

  useEffect(() => {
    if (successOrErrorMessage.userRegister) {
      dispatch(removeSuccessSignUpMessage());
      navigation.push("Login");
    } else if (successOrErrorMessage.error) {
      dispatch(removeErrorSignUpMessage());
      setFormErrors((prevState) => ({
        ...prevState,
        emailError: "Repeated Email",
      }));
    }
    dispatch(roleList());
  }, [successOrErrorMessage]);

  return (
    <View style={styles.container}>
      <View style={styles.signupForm}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.formGroup}>
          <Text>First Name</Text>
          <TextInput
            style={styles.input}
            name="firstName"
            placeholder="Enter your first name"
            onBlur={() => handleBlur("firstName")}
            onChangeText={(value) => handleChange("firstName", value)}
          />
          <Text style={styles.errorMessage}>{formErrors.firstNameError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text>Last Name</Text>
          <TextInput
            style={styles.input}
            name="lastName"
            placeholder="Enter your last name"
            onBlur={() => handleBlur("lastName")}
            onChangeText={(value) => handleChange("lastName", value)}
          />
          <Text style={styles.errorMessage}>{formErrors.lastNameError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            name="password"
            placeholder="Enter your password"
            onBlur={() => handleBlur("password")}
            onChangeText={(value) => handleChange("password", value)}
          />
          <Text style={styles.errorMessage}>{formErrors.passwordError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text>Email Address</Text>
          <TextInput
            style={styles.input}
            name="email"
            placeholder="Enter your email address"
            onBlur={() => handleBlur("email")}
            onChangeText={(value) => handleChange("email", value)}
          />
          <Text style={styles.errorMessage}>{formErrors.emailError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Dropdown
            style={styles.dropdown}
            data={
              roles.length === 0
                ? []
                : [
                    ...roles.map((element) => {
                      return { label: element.name, value: element.id };
                    }),
                  ]
            }
            labelField="label"
            placeholder={
              formData.roleId === ""
                ? "Select Item"
                : roles.find((element) => formData.roleId === element.id)
                    ?.name || ""
            }
            value={formData.roleId}
            onChange={(item) => {
              setFormData((prevData) => ({ ...prevData, roleId: item.value }));
            }}
          />
          <Text style={styles.errorMessage}>{formErrors.roleError}</Text>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submit}
          disabled={successOrErrorMessage.loading}
        >
          <Text style={styles.buttonText}>
            {successOrErrorMessage.loading ? "Loading..." : "Submit"}
          </Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            style={styles.signInLink}
            onPress={() => navigation.push("Login")}
          >
            <Text style={styles.signInText}>Login Here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;
