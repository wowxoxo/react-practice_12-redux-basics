import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

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
  }
});

export const authActions = authSlice.actions;

export default store;
