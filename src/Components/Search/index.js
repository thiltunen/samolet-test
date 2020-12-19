import "./index.scss";
import { useState } from "react";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const searchHandler = (value) => {
    setSearchText(value);
  };
  return (
    <form className="search">
      <input
        value={searchText}
        onChange={(e) => searchHandler(e.target.value)}
        name="title"
        type="text"
        className="search__input"
        placeholder="Найти библиотеки"
      />
      <button className="search__button">
        <IcomoonReact
          iconSet={iconSet}
          className="search__icon"
          icon="search"
        />
      </button>
    </form>
  );
};

export default Search;
