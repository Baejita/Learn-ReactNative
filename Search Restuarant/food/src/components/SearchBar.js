import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View style={styles.backGround}>
      <Feather name="search" size={30} style={styles.searchIcon} />
      <TextInput placeholder="Search" style={styles.searchText} />
    </View>
  );
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "#f8f7f7",
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginHorizontal: 10,
    marginRight: 20,
    color: "#999",
  },
  searchText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#444",
  },
});

export default SearchBar;
