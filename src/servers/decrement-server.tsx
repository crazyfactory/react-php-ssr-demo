import * as React from "react";
import {renderToString} from "react-dom/server";
import {Provider} from "react-redux";
import {Decrement} from "../components/Decrement";
import {configureStore} from "../redux/configureStore";

const store = configureStore(context);
dispatch(renderToString(
  <Provider store={store}>
    <Decrement/>
  </Provider>
));
