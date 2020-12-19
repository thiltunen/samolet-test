import "./index.scss";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";
import { useDispatch, useSelector } from "react-redux";
import { filterLibs } from "redux/actions/filterText";

const Search = () => {
  const searchText = useSelector((state) => state.filterText);
  const dispatch = useDispatch();

  const searchHandler = (value) => {
    dispatch(filterLibs(value));
  };

  return (
    <div className="search">
      <input
        value={searchText}
        onChange={(e) => searchHandler(e.target.value)}
        name="title"
        type="text"
        className="search__input"
        placeholder="Поиск по региону"
      />
      <button className="search__button">
        <IcomoonReact
          iconSet={iconSet}
          className="search__icon"
          icon="search"
        />
      </button>
    </div>
  );
};

export default Search;
