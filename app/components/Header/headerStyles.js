import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#A0CFA2",
    marginBottom: "2%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#04AA6D",
    borderRadius: 5,
    paddingVertical: "2%",
    paddingHorizontal: "4%",
    marginLeft: "2%",
  },
  logoutButtonText: {
    color: "white",
  },
});

export default headerStyles;