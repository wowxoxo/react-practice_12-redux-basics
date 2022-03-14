// import { counterReducer } from "./index-old";

import deepFreeze from "deep-freeze";
import { counterSlice } from ".";

const counterReducer = counterSlice.reducer;

describe("Tests for counter", () => {
  const initialState = { counter: 0, showCounter: true };

  deepFreeze(initialState);

  test("should return the initial state", () => {
    expect(counterReducer(initialState, {})).toEqual(initialState);
  });

  test("should return the incremented counter", () => {
    expect(
      counterReducer(initialState, counterSlice.actions.increment())
    ).toEqual({
      counter: 1,
      showCounter: true
    });
  });

  test("should return the decremented counter", () => {
    expect(
      counterReducer(initialState, counterSlice.actions.decrement())
    ).toEqual({
      counter: -1,
      showCounter: true
    });
  });

  test("should return the increased counter", () => {
    expect(
      counterReducer(initialState, counterSlice.actions.increase(5))
    ).toEqual({
      counter: 5,
      showCounter: true
    });
  });

  test("should return the toggled counter", () => {
    expect(counterReducer(initialState, counterSlice.actions.toggle())).toEqual(
      {
        counter: 0,
        showCounter: false
      }
    );
  });
});
