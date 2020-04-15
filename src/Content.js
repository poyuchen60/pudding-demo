import React, { useEffect } from "react";
import "./Content.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Media from "react-media";

import CollapsibleList from "./components/CollapsibleList";
import useReload from "./useReload";

const Content = () => {
  return (
    <div className="container">
      <Side />
      <Media query={{ maxWidth: 480 }}>
        {isSmall =>
          isSmall ? (
            <Switch>
              <Route exact path="/content/statistic">
                <Statistic />
              </Route>
              <Route path="/content/:id">
                <Main />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/content/statistic">
                <Statistic />
              </Route>
              <Route path="/content/:id">
                <Main />
              </Route>
              <Redirect
                from="/content"
                to={{
                  pathname: "/content/statistic",
                  state: { redirect: true }
                }}
              />
            </Switch>
          )
        }
      </Media>
    </div>
  );
};

const Side = () => {
  const [reload, setReload] = useReload("/content");
  useEffect(() => {
    if (reload) setTimeout(() => setReload(false), 1000);
  }, [reload, setReload]);
  return (
    <div className="side">
      <CollapsibleList />
      {reload && <div>Reload</div>}
    </div>
  );
};

const Main = () => {
  const [reload, setReload] = useReload("/content/Test");
  useEffect(() => {
    if (reload) setTimeout(() => setReload(false), 1000);
  }, [reload, setReload]);
  return (
    <div className="main">
      <Link to="/content">Back</Link>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>A Test</p>
      {reload && <div>Reload</div>}
    </div>
  );
};

const Statistic = () => {
  const [reload, setReload] = useReload("/content/statistic");
  useEffect(() => {
    if (reload) setTimeout(() => setReload(false), 1000);
  }, [reload, setReload]);
  return (
    <div className="main">
      <Link to="/content">
        <span className="material-icons md-36">menu_open</span>
      </Link>
      <h2>Statistic</h2>
      {reload && <div>Reload</div>}
    </div>
  );
};

export default Content;
