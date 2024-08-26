import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

function SearchSceen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar term={term} onTermChage={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
    </View>
  );
}

export default SearchSceen;
