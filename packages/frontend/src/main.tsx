import React from "react";
import ReactDOM from "react-dom";
import {
  createClient,
  defaultExchanges,
  Provider as GQLProvider,
  subscriptionExchange,
} from "urql";
import "./index.css";
import App from "./App";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <GQLProvider value={client}>
      <App />
    </GQLProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
