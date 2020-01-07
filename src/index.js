import React from "react";
import ReactDOM from "react-dom";
import { rootReducer, StateProvider, InitialState } from "./helpers";

import { App } from "./components";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StateProvider initialState={InitialState} reducer={rootReducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
