import {EventsReceiver} from "eventrix";

export const generateLoadReceivers = (stateQuantity, mockedItems) => {
    const receivers = [];
    for (let i = 0; i < stateQuantity; i++) {
        receivers[i] = new EventsReceiver(
            `Test${i}:list.load`,
            (eventName, eventData, stateManager) => {
                const {counters, ids, byIds} = mockedItems[i];
                stateManager.setState(`countersTestList${i}`, counters);
                stateManager.setState(`byIdsTestList${i}`, byIds);
                stateManager.setState(`idsTestList${i}`, ids);
            }
        )
    }
    return receivers;
};

export const generateIncreaseReceivers = (stateQuantity) => {
    const receivers = [];
    for (let i = 0; i < stateQuantity; i++) {
        receivers[i] = new EventsReceiver(
            `Test${i}:list.increaseCounter`,
            (eventName, id, stateManager) => {
                const statePath = `countersTestList${i}.${id}`;
                const counter = stateManager.getState(statePath);
                stateManager.setState(statePath, counter + 1);
            }
        )
    }
    return receivers;
};