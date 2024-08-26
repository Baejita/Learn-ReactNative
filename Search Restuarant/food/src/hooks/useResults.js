import { useEffect, useState } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, seteErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      seteErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
};
