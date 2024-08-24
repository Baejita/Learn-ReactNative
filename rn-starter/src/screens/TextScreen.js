import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
function TextScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      <Text>My name is {name}</Text>

      <Text>Enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => setPassword(newText)}
      />

      {password.length < 5 ? (
        <Text>Your password must be longer than 5 characters.</Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
