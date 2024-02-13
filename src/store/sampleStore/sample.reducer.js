import produce from "immer";
import { SAMPLE_REQUEST } from "./sample.action";


export const SampleReducer = (state, action) => {
  switch (action.type) {
    case SAMPLE_REQUEST: {
      const nextState = produce(state, draftState => {
        draftState.data = "yes";
      });
      return nextState;
    }
    default:
      return state;
  }
}