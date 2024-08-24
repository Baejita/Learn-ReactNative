import React from "react";
import { StyleSheet, Text, View } from "react-native";

function BoxmodelScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box 1 </Text>
      <Text style={styles.textTwoStyle}>Box 2 </Text>
      <Text style={styles.textThreeStyle}>Box 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "lightblue",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "50%",
    flexDirection: "row",
  },
  textOneStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,

    backgroundColor: "red",
  },
  textTwoStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    top: 50,
    backgroundColor: "green",
  },
  textThreeStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,

    backgroundColor: "blue",
  },
});

export default BoxmodelScreen;
