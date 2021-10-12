import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modaloverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  container: {
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#b13b44",
    color: "#fff",
    textAlign: "center",
    padding: 15,
    fontSize: 18
  },
  input:{
    height: 40,
    margin: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 6
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: "#b13b44"
  }
})