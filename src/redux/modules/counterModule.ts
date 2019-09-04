import {ActionType, getType} from "typesafe-actions";
import * as counterActionCreators from "./counterActionCreators";

export interface ICounterState {
  decrementedNum: number;
  incrementedNum: number;
  offset: number;
}

const initialState: ICounterState = {
  decrementedNum: 0,
  incrementedNum: 0,
  offset: 1
};

export function counterReducer(
  state: ICounterState = initialState,
  action: ActionType<typeof counterActionCreators>
): ICounterState {
  switch (action.type) {
    case getType(counterActionCreators.changeOffset):
      return {
        ...state,
        offset: action.payload
      };
    case getType(counterActionCreators.increment):
      return {
        ...state,
        incrementedNum: state.incrementedNum + state.offset
      };
    case getType(counterActionCreators.decrement):
      return {
        ...state,
        decrementedNum: state.decrementedNum - state.offset
      };
    default:
      return state;
  }
}
