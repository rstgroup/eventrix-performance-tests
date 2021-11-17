import eventrix from './eventrix';
import items from "./mockedItems";
import {eventsNames} from "./eventrix/eventNames";

const eventsList = eventsNames.increaseEventsList;

export const simulate = (endCallback) => {
    const intervals = [];
    console.log('SIMULATION START');
    items.forEach((mockedItems, index) => {
        mockedItems.ids.forEach(id => {
            intervals.push(setInterval(() => {
                const eventName = eventsList[index];
                eventrix.emit(eventName, id);
            }, (id * 2) + 500));
        })
    });
    setTimeout(() => {
        intervals.forEach(interval => clearInterval(interval));
        console.log('SIMULATION STOP');
        endCallback();
    }, 30000);
};
