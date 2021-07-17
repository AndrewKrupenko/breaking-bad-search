import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid"
import {useEffect, useState} from "react";
import axios from "axios";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]); // Whenever this query changes this function will run

  return (
    <div className="container">
      <Header />
      <Search getQuery={(searchedValue) => setQuery(searchedValue)} />
      <CharacterGrid
        items={items}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
