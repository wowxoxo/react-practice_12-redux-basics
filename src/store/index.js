import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";
import { logger } from "../middleware/logger";
import { scheduler } from "../middleware/scheduler";

const initialCounterState = { counter: 0, showCounter: true };

export const toggleWithDelay = (delay) => {
  return {
    type: "counter/toggle",
    delay
  };
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;

const initialAuthState = { isAuthenticated: true };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      // return { isAuthenticated: true }
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer
  },
  middleware: [logger, scheduler]
});

// export const store = createStore(rootReducer, applyMiddleware(logger));

export const authActions = authSlice.actions;

export default store;
