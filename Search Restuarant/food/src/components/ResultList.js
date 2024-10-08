import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultDetails from "./ResultDetails";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function ResultList({ title, results }) {
  const navigate = useNavigation();
  if (!results.length) {
    return null;
  }
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
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
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
  },
});

export default ResultList;
