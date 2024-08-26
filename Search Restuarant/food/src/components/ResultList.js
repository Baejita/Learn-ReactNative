import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultDetails from "./ResultDetails";

function ResultList({ title, results }) {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
  },
});

export default ResultList;
