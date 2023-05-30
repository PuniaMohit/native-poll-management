import { StyleSheet } from "react-native";

const pollListStyles = StyleSheet.create({
  container: {},
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "70%",
  },
  containerAddPollButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navbar: {
    backgroundColor: "#A0CFA2",
    marginBottom: "2%",
  },
  navbarHeader: {
    fontSize: 24,
    color: "white",
    fontWeight: "700",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  showAddPollButton: {
    marginRight: "2%",
    backgroundColor: "#04AA6D",
    borderRadius: 5,
    paddingVertical: "0.5%",
    paddingHorizontal: "2%",
    color: "white",
  },
  logoutButton: {
    backgroundColor: "#04AA6D",
    borderRadius: 5,
    paddingVertical: "2%",
    paddingHorizontal: "7%",
    color: "white",
  },
  pollTitle: {
    fontSize: 24,
    color: "#04AA6D",
    fontWeight: "700",
    paddingRight: "1%",
  },
  editButton: {
    marginLeft: "1%",
  },
  singlePollButton: {
    marginLeft: "9%",
  },
  radio: {
    marginLeft: "1%",
  },
  radioContainer: {
    display: "flex",
  },
  editButtons: {
    display: "flex",
  },
  editButtonRadio: {
    marginLeft: "1%",
    color: "gray",
    fontSize: 12,
  },
  editButtonPencilSquare: {
    marginLeft: "10%",
  },
  voteCount: {
    marginLeft: "1%",
  },
  showMorePollButton: {
    backgroundColor: "#04AA6D",
    borderRadius: 5,
    paddingVertical: "0.5%",
    paddingHorizontal: "2%",
    color: "white",
    cursor: "pointer",
  },
  showMorePollButtonContainer: {
    textAlign: "center",
    marginBottom: "2%",
  },
  showMoreDisabledButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    paddingVertical: "0.5%",
    paddingHorizontal: "2%",
    color: "white",
  },
});

export default pollListStyles;
