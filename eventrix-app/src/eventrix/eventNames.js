import {getUrlParam} from "../helpers";

const stateQuantity = getUrlParam('s');

const loadEventsList = [];
const increaseEventsList = [];
for (let i = 0; i < stateQuantity; i++) {
    loadEventsList[i] = `Test${i}:list.load`;
}
for (let i = 0; i < stateQuantity; i++) {
    increaseEventsList[i] = `Test${i}:list.increaseCounter`;
}

export const eventsNames = {
    loadEventsList,
    increaseEventsList,
};
