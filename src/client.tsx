import * as React from "react";
import {hydrate} from "react-dom";
import {Provider} from "react-redux";
import {Increment} from "./components/Increment";
import {Decrement} from "./components/Decrement";
import {Offset} from "./components/Offset";
import {configureStore} from "./redux/configureStore";

const store = configureStore(window.__INITIAL_STATE__);
hydrate(
  <Provider store={store}>
    <Offset/>
  </Provider>,
  document.getElementById("offset")
);
hydrate(
  <Provider store={store}>
    <Increment/>
  </Provider>,
  document.getElementById("increment")
);
hydrate(
  <Provider store={store}>
    <Decrement/>
  </Provider>,
  document.getElementById("decrement")
);
