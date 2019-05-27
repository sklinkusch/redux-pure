const { createStore } = require("redux");

const ADD_ONE = "ADD_ONE";
const REMOVE_ONE = "REMOVE_ONE";

const myCoolReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case ADD_ONE: return { ...state, counter: state.counter + 1 };
    // means: const newState = {...state};
    // newState.counter + 1;
    // return newState;
    // Attention: cases in switch not block-scoped
    // Hint: Make {} around the cases, then it is block-scoped
    case REMOVE_ONE: return { ...state, counter: state.counter - 1 };
    default: return state;
  }
}


let store = createStore(myCoolReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

store.subscribe(() => {
  const state = store.getState();
  const node = document.getElementById("counter")
  node.innerHTML = state.counter;
})

store.dispatch({ type: ADD_ONE });
store.dispatch({ type: ADD_ONE });
store.dispatch({ type: ADD_ONE });
store.dispatch({ type: ADD_ONE });