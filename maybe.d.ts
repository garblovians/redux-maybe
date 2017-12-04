import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
export declare const actionTypes: {
    CALL_ME_MAYBE: string;
    CALLED_MAYBE: string;
};
export interface MaybeMapping {
    type: string;
    callback: any;
    count: number;
}
export interface MaybeAction extends Action {
    payload: MaybeMapping;
}
export declare const callMeMaybe: (type: string, fn: any, cnt: number) => MaybeAction;
export declare const calledMaybe: () => {
    type: string;
};
export declare const maybeEpic: (action$: ActionsObservable<Action>) => Observable<{
    type: string;
}>;
