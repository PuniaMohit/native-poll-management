import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f9ff",
    height: "100%",
  },
  signupForm: {
    marginTop: 80,
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
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    marginBottom: 15,
    textAlign: "center",
    color: "#33cc33",
  },
  formGroup: {
    flexDirection: "column",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  submitButton: {
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
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signInText: {
    marginLeft: 5,
    fontSize: 14,
    color: "blue",
  },
  dropdown: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: "transparent",
    borderColor: "gray",
    borderWidth: "1px",
  },
});

export default styles;
