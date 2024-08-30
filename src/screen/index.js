import React, { useContext, useEffect } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context } from "../context/BlogProvider";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

function index({ navigation }) {
  const { state, deleteBlogPost, getBlockPosts } = useContext(Context);

  useEffect(() => {
    getBlockPosts();

    const listener = navigation.addListener("didFocus", () => getBlockPosts());

    return () => {
      listener.remove();
    }; // Stop listening when the screen is unmounted
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>{item.title}</Text>
                <Text>{item.id}</Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome6 style={styles.trash} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

index.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} style={styles.plus} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "orange",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 30,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  trash: {
    fontSize: 24,
    paddingRight: 10,
  },
  plus: {
    paddingRight: 10,
  },
});

export default index;
