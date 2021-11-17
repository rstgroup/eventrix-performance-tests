import {getUrlParam} from "../helpers";

const stateQuantity = getUrlParam('s');

const loadEventsList = [];
const loadEventsActions = {};
const increaseEventsList = [];
const increaseEventsActions = {};
for (let i = 0; i < stateQuantity; i++) {
    loadEventsList[i] = `Test${i}:list.load`;
    loadEventsActions[`loadListTest${i}`] = () => ({type: loadEventsList[i]});
}
for (let i = 0; i < stateQuantity; i++) {
    increaseEventsList[i] = `Test${i}:list.increaseCounter`;
    increaseEventsActions[`increaseCounterListTest${i}`] = (id) => ({type: increaseEventsList[i], id});
}

export const eventsNames = {
    loadEventsList,
    increaseEventsList,
};


export const actions = {
    loadEventsActions,
    increaseEventsActions,
};