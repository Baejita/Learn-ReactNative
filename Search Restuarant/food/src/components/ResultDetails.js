import React from "react";
import { View } from "react-native";

function ResultDetails({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

export default ResultDetails;
