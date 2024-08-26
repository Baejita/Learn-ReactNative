import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

function SearchSceen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChage={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results}</Text>
    </View>
  );
}

export default SearchSceen;
