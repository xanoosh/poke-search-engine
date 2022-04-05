import { Action } from '@ngrx/store';

export function simpleReducer(state: string = '', action: Action) {
  if (action.type !== '') {
    return (state = action.type);
  } else {
    return state;
  }
}
