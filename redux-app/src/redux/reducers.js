import {combineReducers} from "redux";
import {getUrlParam} from "../helpers";
import {generateReducers} from "../reduxHelpers";
import mockedItems from "../mockedItems";

const stateQuantity = getUrlParam('s');

const reducers = combineReducers(generateReducers(stateQuantity, mockedItems));
export default reducers;
