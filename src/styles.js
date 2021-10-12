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
  },
  buttonModal: {
    position: "absolute",
    right: 10,
    top: 560,
    width: 150,
    height: 50,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  contentGeral: {
    height: "100%",
    backgroundColor: "#1F2937"
  },
  task: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6D28D9"
  },
  contentTaskDelete: {
    backgroundColor: "#ff4040",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20
  },
  taskDelete: {
    color: "#fff",
    height: 40,
  }
})