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
    backgroundColor: "#6D28D9",
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
    color: "#6D28D9"
  },
  buttonModal: {
    position: "absolute",
    right: 10,
    top: 560,
    width: 150,
    height: 50,
    backgroundColor: "#170531",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  contentGeral: {
    height: "100%",
    width: "100%",
    backgroundColor: "#1F2937"
  },
  contentTasks: {
    width: "100%",
    alignItems: "center"
  },
  task: {
    height: 40,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6D28D9",
    borderRadius: 10
  },
  contentTaskDelete: {
    height: 40,
    backgroundColor: "#ff4040",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 10
  },
  taskDelete: {
    color: "#fff",
    height: 40
  }
})