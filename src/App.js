import React from "react";
import "./styles.css";
import { Link, Switch, Route } from "react-router-dom";
import HistoryTraceContext from "./HistroyTraceContext";

import Content from "./Content";
import RippleButton from "./components/RippleButton";
import useHistoryTrace from "./useHistoryTrace";

export default function App() {
  const from = useHistoryTrace();

  return (
    <HistoryTraceContext.Provider value={from}>
      <div className="App">
        <nav className="header">
          <div className="left">
            <h2>
              <Link to="/">Pudding</Link>
            </h2>
          </div>
          <ul className="right">
            <li>
              <Link to="/content">
                <RippleButton className="icon-button">
                  <i className="material-icons">list</i>
                </RippleButton>
              </Link>
            </li>
            <li>
              <RippleButton className="icon-button">
                <i className="material-icons">notifications_none</i>
              </RippleButton>
            </li>
            <li>
              <RippleButton className="icon-button">
                <i className="material-icons">face</i>
              </RippleButton>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/">
            <div className="cover">
              <h1>Make Schnauzer Great Again</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </HistoryTraceContext.Provider>
  );
}
