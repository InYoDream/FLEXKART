import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import App from "./App";

const store = configureStore({
  reducer: { cart: cartReducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
