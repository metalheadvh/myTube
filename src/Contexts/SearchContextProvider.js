import { createContext, useState } from "react";
export const SearchContext = createContext(null);

export default function SearchContextProvider(props) {
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearchActive = () => {
    setSearchActive(!searchActive);
  };

  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
  };
  return (
    <SearchContext.Provider value={{ search, setSearch, searchActive, setSearchActive, toggleSearchActive, onSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
