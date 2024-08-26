import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultDetails from "./ResultDetails";
import { TouchableOpacity } from "react-native-gesture-handler";

function ResultList({ title, results, navigation }) {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <FlatList
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultShow")}>
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
  },
  container: {
    marginBottom: 50,
    fontWeight: "bold",
    backgroundColor: "orange",
  },
});

export default ResultList;
