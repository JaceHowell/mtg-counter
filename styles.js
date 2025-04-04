import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#abc",
      alignItems: "center",
      justifyContent: "center",
    },
    counterText: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: "-50%" }],
        // borderWidth: 1,
        // borderColor: "red"

    },
    button: {
        // padding: 10,
        width: 150,
        height: 250,
        justifyContent: "center",
        backgroundColor: "",
        borderWidth: 1,
        borderColor: "blue"
    },
    buttonText: {
        textAlign: "center",  
        padding: 20,
        color: "white",
    },
  });
  
  export default styles