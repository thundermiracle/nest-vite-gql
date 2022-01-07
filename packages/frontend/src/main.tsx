import React from "react";
import ReactDOM from "react-dom";
import {
  createClient,
  defaultExchanges,
  Provider as GQLProvider,
  subscriptionExchange,
} from "urql";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./styles/theme";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GQLProvider value={client}>
        <App />
      </GQLProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
