import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ResultDetails({ result }) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.title}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
