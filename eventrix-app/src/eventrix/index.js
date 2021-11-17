import {Eventrix} from "eventrix";
import {getUrlParam} from "../helpers";
import receivers from "./receivers";

const stateQuantity = getUrlParam('s');
const initialState = {};

for (let i = 0; i < stateQuantity; i++) {
    initialState[`idsTestList${i}`] = [];
    initialState[`byIdsTestList${i}`] = {};
    initialState[`countersTestList${i}`] = {};
}

export default new Eventrix(initialState, receivers);
