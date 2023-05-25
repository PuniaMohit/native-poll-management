import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { signInValidateForm } from '../../utils/formValidate';
import { signInHandleBlur } from '../../utils/formValidate';
import { login } from '../../redux/login/actions/login';
import styles from './loginStyles'; // Import your custom styles

const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const successOrErrorMessage = useSelector((state) => state.login);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     emailError: "",
//     passwordError: "",
//   });
//   const submit = (event) => {
//     signInValidateForm(event, formData, setFormErrors, dispatch, login);
//   };
//   const handleBlur = (event) => {
//     signInHandleBlur(event, formErrors, setFormErrors);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   useEffect(() => {
//     const { user, error } = successOrErrorMessage;
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//       navigate("/pollList");
//     } else if (error) {
//       const errorMessage = error.message;
//       setFormErrors((prevState) => ({
//         emailError:
//           errorMessage === "user data not found"
//             ? "user data not found"
//             : prevState.emailError,
//         passwordError:
//           errorMessage === "password is incorrect"
//             ? "password is incorrect"
//             : prevState.passwordError,
//       }));
//     }
//   }, [successOrErrorMessage]);

    return (
        <View style={styles.container}>
          <View style={styles.signupForm}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.formGroup}>
              <Text>Email Address</Text>
              <TextInput
                style={styles.input}
                name="email"
                // onBlur={handleBlur}
                // onChangeText={handleChange}
                placeholder="Enter your email address"
              />
              {/* <Text style={styles.errorMessage}>{formErrors.emailError}</Text> */}
            </View>
            <View style={styles.formGroup}>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                name="password"
                // onBlur={handleBlur}
                // onChangeText={handleChange}
                placeholder="Enter your password"
              />
            </View>
            {/* <Text style={styles.errorMessage}>{formErrors.passwordError}</Text> */}
            <TouchableOpacity
              style={styles.button}
            //   onPress={submit}
            //   disabled={successOrErrorMessage.loading}
            >
              <Text style={styles.buttonText}>
                {/* {successOrErrorMessage.loading ? 'Loading...' : 'Submit'} */}
              </Text>
            </TouchableOpacity>
            <View style={styles.signupLinkContainer}>
              <Text>No Account?</Text>
              <TouchableOpacity
                style={styles.signupLink}
                // onPress={() => navigation.navigate('Signup')}
              >
                <Text style={styles.signupLinkText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
};

export default LoginPage;