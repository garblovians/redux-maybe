"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionTypes = {
    CALL_ME_MAYBE: "CALL_ME_MAYBE",
    CALLED_MAYBE: "CALLED_MAYBE",
};
exports.callMeMaybe = (type, fn, cnt) => {
    return {
        type: exports.actionTypes.CALL_ME_MAYBE,
        payload: {
            type: type,
            callback: fn,
            count: cnt,
        }
    };
};
exports.calledMaybe = () => {
    return { type: exports.actionTypes.CALLED_MAYBE };
};
exports.maybeEpic = (action$) => action$.ofType(exports.actionTypes.CALL_ME_MAYBE)
    .switchMap((action) => action$.ofType(action.payload.type)
    .map((maybeAction) => {
    action.payload.callback();
    return exports.calledMaybe();
})
    .take(action.payload.count));
