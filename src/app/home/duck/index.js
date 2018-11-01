import homeReducer from "./reducers";
export { default as homeOperations } from "./operations";
export { default as homeTypes } from "./types";
export default homeReducer;

// Update: You can create a duck directory for src/app
//as well, where you can define global state and actions. So for example, you can define the app locale in this state.
