import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos" + `/${id}`
    );
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.title}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultShowScreen;
