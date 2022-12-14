import React from "react";
import ReactDOM from "react-dom/client";

import { theme } from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
