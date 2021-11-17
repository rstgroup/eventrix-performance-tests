import store from './redux';
import items from "./mockedItems";
import {actions} from "./redux/actions";

export const simulate = (endCallback) => {
    const intervals = [];
    console.log('SIMULATION START');
    items.forEach((mockedItems, index) => {
        mockedItems.ids.forEach(id => {
            intervals.push(setInterval(() => {
                const action = actions.increaseEventsActions[`increaseCounterListTest${index}`];
                store.dispatch(action(id));
            }, (id * 2) + 500));
        })
    });
    setTimeout(() => {
        intervals.forEach(interval => clearInterval(interval));
        console.log('SIMULATION STOP');
        endCallback();
    }, 30000);
};