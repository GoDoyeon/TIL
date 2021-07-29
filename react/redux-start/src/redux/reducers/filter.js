import { SHOW_ALL, SHOW_COMPLETE } from '../actions';

const initialState = 'ALL';

export default function filter(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }
  if (action.type === SHOW_ALL) {
    return 'ALL';
  }
  return previousState;
}
