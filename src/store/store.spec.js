import { counterReducer } from ".";
import deepFreeze from "deep-freeze";

describe("Tests for counter", () => {
  const initialState = { counter: 0, showCounter: true };

  deepFreeze(initialState);

  test("should return the initial state", () => {
    expect(counterReducer(initialState, {})).toEqual(initialState);
  });

  test("should return the incremented counter", () => {
    expect(counterReducer(initialState, { type: "increment" })).toEqual({
      counter: 1,
      showCounter: true
    });
  });

  test("should return the decremented counter", () => {
    expect(counterReducer(initialState, { type: "decrement" })).toEqual({
      counter: -1,
      showCounter: true
    });
  });

  test("should return the increased counter", () => {
    expect(
      counterReducer(initialState, { type: "increase", value: 5 })
    ).toEqual({
      counter: 5,
      showCounter: true
    });
  });

  test("should return the toggled counter", () => {
    expect(counterReducer(initialState, { type: "toggle" })).toEqual({
      counter: 0,
      showCounter: false
    });
  });
});
