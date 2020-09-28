import { ACTIONS } from "./actionTypes";


export const actions =  {
    startLogin: () => {
        return {
            type: ACTIONS.AUTH_ACTIONS
        }
    },
}


export type ActionType =  ReturnType<(typeof actions)[keyof (typeof actions)]>
