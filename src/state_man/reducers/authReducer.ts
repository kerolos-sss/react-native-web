import { Action } from "redux";
import { ACTIONS, authItems } from "../actions"


type AuthState = {type: ACTIONS.AUTH_ACTIONS }
export const authReducer = (state: AuthState = {} as any, action: Action ) => {
    const act = action as authItems.ActionType
    switch (action.type) {
        case "":
            
            break;
    
        default:
            break;
    }


    return state
}