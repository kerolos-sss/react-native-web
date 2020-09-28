//////// <reference path="./actionTypes.ts" />

import { ACTIONS }  from './actionTypes';
import * as testItems  from './testActions'
import * as authItems  from './authActions'

class DuplicateActionKeyException extends Error{

} 

console.log("START CHECKING FOR DUPLICATE KEYS");
// Throw on duplicate actions 
let allActions: string[] = [];
Object.entries(ACTIONS).forEach( ([collectionKey, collection]) =>  Object.keys(collection).forEach(key => {
    if (allActions.includes(key)){
        throw new DuplicateActionKeyException(`Check The Key ${collectionKey}.${key}` ); 
    }
    allActions.push(key)
}));
console.log("DONE CHECKING FOR DUPLICATE KEYS");


export {ACTIONS};
export {testItems}
export {authItems}
