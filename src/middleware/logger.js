export const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("state before", store.getState());
  let result = next(action);
  console.log("state after", store.getState());
  return result;
};
