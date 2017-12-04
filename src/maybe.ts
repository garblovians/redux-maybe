import { AnyAction, Action }                  from 'redux';
import { Subject, Observable, Observer }      from 'rxjs';
import { combineEpics, ActionsObservable }    from 'redux-observable';
import * as _                                 from 'lodash';

export const actionTypes = {
  CALL_ME_MAYBE   : "CALL_ME_MAYBE",
  CALLED_MAYBE    : "CALLED_MAYBE",
}

interface MaybeMapping {
  type:     string,
  callback: any,
  count:    number,
}

export interface MaybeAction extends Action{
  payload:MaybeMapping
}

export const callMeMaybe = (type: string,fn : any, cnt: number) : MaybeAction => {
  return {
    type: actionTypes.CALL_ME_MAYBE,
    payload: {
      type: type,
      callback: fn,
      count: cnt,
    }
  }
}

export const calledMaybe = () => {
  return {type:actionTypes.CALLED_MAYBE}
}

export const maybeEpic = (action$ : ActionsObservable<Action>) => 
  action$.ofType(actionTypes.CALL_ME_MAYBE)
    .flatMap((action : MaybeAction) =>  
      action$.ofType(action.payload.type)
      .map((maybeAction : MaybeAction) => {
        action.payload.callback();
        return calledMaybe()
      })
      .take(action.payload.count)
    )

