import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

function SearchSceen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$$" || '$$"
    return results.filter((results) => results.price === price);
  };

  return (
    <View>
      <SearchBar term={term} onTermChage={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultList results={filterResultsByPrice("$$$")} title="Big spender" />
    </View>
  );
}

export default SearchSceen;
