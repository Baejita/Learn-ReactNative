import { useEffect, useState } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, seteErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();

      setResults(data);
    } catch (error) {
      seteErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("title");
  }, []);
  return [searchApi, results, errorMessage];
};
