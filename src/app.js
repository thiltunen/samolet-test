import "./app.scss";
import React from "react";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about/:id">
          <AboutPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}
