import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

function SearchSceen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (completed) => {
    // price === '$' || '$$$" || '$$"
    return results.filter((results) => results.completed === completed);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term} onTermChage={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length}</Text> */}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice(true)}
          title="อ่านเสร็จแล้ว"
        />
        <ResultList
          results={filterResultsByPrice(false)}
          title="ยังไม่ได้อ่าน"
        />
        <ResultList results={filterResultsByPrice("$$$")} title="Big spender" />
      </ScrollView>
    </View>
  );
}

export default SearchSceen;
