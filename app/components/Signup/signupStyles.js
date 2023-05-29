import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f9ff",
    paddingTop: "5%",
  },
  signupForm: {
    margin: "auto",
    width: "25%",
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
  button: {
    backgroundColor: "#007bff",
    color: "white",
    borderWidth: 0,
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signInLink: {
    marginLeft: 5,
    color: "#007bff",
    cursor: "pointer",
  },
  signInText: {
    fontSize: 14,
  },
  role: {
    position: "relative",
  },
  caretIcon: {
    position: "absolute",
    top: "55%",
    right: "5%",
  },
});

export default styles;
