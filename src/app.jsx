import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
