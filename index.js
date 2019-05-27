const { createStore } = require("redux");

const myCoolReducer = (state = 0, action) => {
  if (action.type === "Add one dude") {
    return state + 1;
  }
  return state;
}


let store = createStore(myCoolReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

store.dispatch({ type: "Add one dude" });
store.dispatch({ type: "Add one dude" });
store.dispatch({ type: "Add one dude" });
store.dispatch({ type: "Add one dude" });