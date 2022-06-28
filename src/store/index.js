// const redux = require("redux"); //way to import in node.js application
import { createStore } from "redux";
const counterReduxer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReduxer);

export default store;
