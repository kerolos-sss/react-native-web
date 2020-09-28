import { ACTIONS } from "./actionTypes";


export const actions = {
    writeToTextAction: (text: string) => {
        return { type: ACTIONS.TEST_ACTIONS.testWriteText, payload: text }
    }, 
    iteToTextAction: (text: string) => {
        return { type: ACTIONS.TEST_ACTIONS.readText, payload: true }
    } 
}

type TypeOfActions = typeof actions;


export type ActionType =  ReturnType<TypeOfActions[keyof TypeOfActions]>
    // { type: typeof ACTIONS.TEST_ACTIONS.testWriteText, payload: string };
