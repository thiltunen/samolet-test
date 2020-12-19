import "./index.scss";
import Search from "Components/Search";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sortLibs } from "redux/actions/lib";
import { cloneDeep } from "lodash";

const Header = () => {
  const [sortDesc, setSortDesc] = useState(true);
  const dispatch = useDispatch();
  const libs = useSelector((state) => state.libs);

  const clickHandler = () => {
    setSortDesc(!sortDesc);
    dispatch(sortLibs(cloneDeep(libs).reverse()));
  };

  return (
    <header className="header">
      <Switch>
        <Route path="/about">
          <Link to="/">
            <IcomoonReact
              iconSet={iconSet}
              className="header__home-icon"
              icon="home3"
            />
          </Link>
        </Route>
        <Route path="/">
          <Link to="/">
            <IcomoonReact
              iconSet={iconSet}
              className="header__home-icon"
              icon="home3"
            />
          </Link>
          <Search />
          <IcomoonReact
            onClick={clickHandler}
            iconSet={iconSet}
            className="header__sort-icon"
            icon={sortDesc ? "arrow-down" : "arrow-up"}
          />
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
