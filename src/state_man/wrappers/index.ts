import { connect, ConnectedProps, DefaultRootState } from 'react-redux';

import * as allFromActions from '../actions'
const { ACTIONS, ...others } = allFromActions;



type ActionItems = typeof others;
type ActionItemsMapped = { [key in keyof ActionItems]: ActionItems[key]["actions"] };

const deepCopy = <T>(target: T, mapFunction: <F extends Function>(func: F) => F = (f) => f): T => {
    console.log(target);
    if (typeof target === "object") {
        let c = target
        for (let key in c) {
            c[key] = deepCopy(c[key], mapFunction);
            console.log(key);
        }
        return c
    } else if (typeof target === "function") {
        if (mapFunction)
            return mapFunction(target);
    }
    // Means that object is atomic
    return target
}

const shortenActionsParent = (target: ActionItems) => {
    let cp: ActionItemsMapped = {} as any;
    for (let key in target) {
        let x = (target as any)[key];
        (cp as any)[key] = deepCopy(x.actions);
    }
    return cp as ActionItemsMapped;
}

const actionContainers = shortenActionsParent(others);

export const withReduxState = connect(
    (state: DefaultRootState) => {
        return { reduxState: state }
    },
    (dispatch) => {

        return deepCopy(actionContainers,
            (f) => {

                type FunctionType = typeof f
                return ((...params: any[]) => dispatch(f(...params))) as unknown as FunctionType;
            }
        )

        // return {
        //     writeTestText: (text: string) => dispatch(actionContainers.testItems.actions.writeToTextAction(text))
        // }
    }

)

export type PropsFromRedux = ConnectedProps<typeof withReduxState>