import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

function SearchSceen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$$" || '$$"
    return results.filter((results) => results.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term} onTermChage={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length}</Text> */}
      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Big spender"
        />
      </ScrollView>
    </View>
  );
}

export default SearchSceen;
