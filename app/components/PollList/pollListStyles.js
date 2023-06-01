import { StyleSheet } from "react-native";

const pollListStyles = StyleSheet.create({
  containerAddPollButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  addPollButton: {
    backgroundColor: "#A0CFA2",
    borderRadius: 5,
    paddingTop: 1,
    width: 80,
    height: 20,
    marginRight: 5,
  },
  containerPollList: {
    marginLeft: 10,
    marginBottom: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  radioForm: {
    flex: 1,
  },
  voteCount: {
    marginLeft: 10,
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
  containerAddMoreButton: {
    marginBottom: 100,
  },
  showMorePollButton: {
    backgroundColor: "#A0CFA2",
    borderRadius: 5,
    width: 100,
    height: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  showMoreDisabledButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    width: 100,
    height: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  showMoreButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default pollListStyles;
