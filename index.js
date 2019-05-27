const { createStore } = require("redux");

const myCoolReducer = (state = 0, action) => {
  return state;
}


let store = createStore(myCoolReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());