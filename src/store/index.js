import { createStore } from "redux";
import produce from "immer";

const initialState = { counter: 0, showCounter: true };

const initialGiftsState = {
  users: [
    {
      id: "user1",
      name: "John"
    }
  ],
  currentUser: {
    id: "user1",
    name: "John"
  },
  gifts: [
    {
      id: "gift1",
      description: "Gift 1 for Sasha",
      image: "image1",
      reservedBy: "user1"
    }
  ]
};

const giftsReducer = (state = initialGiftsState, action) => {
  if (action.type === "add-gift") {
    return {
      ...state,
      gifts: [...state.gifts, action.payload]
      // gifts: state.gifts.push(action.payload)
    };
  }

  if (action.type === "add-gift") {
    return produce(state, (draft) => {
      draft.gifts.push(action.payload);
    });
  }
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // return { ...state, counter: ++state.counter };
    return {
      ...state,
      counter: state.counter + 1
      // showCounter: state.showCounter
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    };
  }

  if (action.type === "decrement") {
    // return {
    //   counter: state.counter - 1,
    //   showCounter: state.showCounter
    // };
    return produce(state, (draft) => {
      draft.counter--;
    });
  }

  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
