export const scheduler = (store) => (next) => (action) => {
  const delayMs = action?.delay;
  if (!delayMs) {
    return next(action);
  }

  const timerId = setTimeout(() => next(action), delayMs);

  return () => {
    console.log("Cancel");
    clearTimeout(timerId);
  };
};
