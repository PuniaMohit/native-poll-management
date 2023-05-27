import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f6f9ff",
  },
  signupForm: {
    marginTop: 200,
    marginLeft: "auto",
    marginRight: "auto",
    width: "75%",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  heading: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color:'#33cc33',
  },
  formGroup: {
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  submitButton: {
    color: "white",
    borderWidth: 0,
    padding: 10,
    fontSize: 18,
    cursor: "pointer",
    width: "100%",
    backgroundColor: "#33cc33",
    marginTop: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
  navigateSignup: {
    marginLeft: 5,
    color: "#007bff",
    cursor: "pointer",
  },
  signinMessage: {
    textAlign: "center",
    marginTop: 5,
  },
  signupLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLink: {},
  signupLinkText: {
    color: "blue",
  },
});

export default styles;
