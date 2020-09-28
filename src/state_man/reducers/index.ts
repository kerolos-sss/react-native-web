import { combineReducers, Action, AnyAction } from 'redux'
import { ACTIONS, testItems } from '../actions';
import { authReducer } from './authReducer';
import { testReducer } from './testReducer';


export const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>

declare module 'react-redux' {
    interface DefaultRootState extends RootState {}
}


// const s: RootState = {test: {text: "111"}}