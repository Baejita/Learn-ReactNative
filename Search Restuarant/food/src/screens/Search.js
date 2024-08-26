import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

function SearchSceen() {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChage={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      <Text>Search Screen</Text>
    </View>
  );
}

export default SearchSceen;
