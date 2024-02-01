import React from "react";
import { CryptoContextProvider } from "./context/crypto-context";
import Applayout from "./components/layout/AppLayout";

const App = () => (
  <CryptoContextProvider>
    <Applayout />
  </CryptoContextProvider>
);

export default App;
