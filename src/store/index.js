// const redux = require("redux"); //way to import in node.js application
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
