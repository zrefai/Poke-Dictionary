import { CHANGE_TO_UNOWN } from "../constants";

export function fontChange(isUnown) {
  return {
    type: CHANGE_TO_UNOWN,
    payload: isUnown,
  };
}
