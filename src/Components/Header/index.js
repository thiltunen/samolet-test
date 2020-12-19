import Search from "Components/Search";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <IcomoonReact
          iconSet={iconSet}
          className="header__home-icon"
          icon="home3"
        />
      </Link>
      <Search />
    </header>
  );
};

export default Header;
