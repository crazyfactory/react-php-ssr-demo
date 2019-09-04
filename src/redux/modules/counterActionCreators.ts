import {createAction} from "typesafe-actions";

export const changeOffset = createAction("COUNTER/CHANGE_OFFSET", (resolve) => {
  return (offset: number) => resolve(offset);
});

export const increment = createAction("COUNTER/INCREMENT", (resolve) => {
  return () => resolve();
});

export const decrement = createAction("COUNTER/DECREMENT", (resolve) => {
  return () => resolve();
});
