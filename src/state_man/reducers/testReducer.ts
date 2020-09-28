import { AnyAction } from "redux";
import { ACTIONS, testItems } from "../actions";

type TestState = { text?: string | null }
export const testReducer = (state: TestState = {}, action: AnyAction ) => {
    let act = action as testItems.ActionType;
    console.log("IN REDUCER")
    console.log(act)
    console.log(ACTIONS.TEST_ACTIONS.testWriteText)
    switch (act.type) {
        
        case ACTIONS.TEST_ACTIONS.testWriteText:
            return { ...state, text: act.payload };
            break;
        default:
            return state;
    }
}
