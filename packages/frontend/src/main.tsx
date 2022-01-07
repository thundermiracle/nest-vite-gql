import React from "react";
import ReactDOM from "react-dom";
import {
  createClient,
  defaultExchanges,
  Provider as GQLProvider,
  subscriptionExchange,
} from "urql";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient as createWSClient } from "graphql-ws";
import App from "./App";
import { theme } from "./styles/theme";

const wsClient = createWSClient({
  url: "ws://localhost:4000/graphql",
});

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink: any) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
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
