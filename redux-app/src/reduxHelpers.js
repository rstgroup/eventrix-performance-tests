export const generateReducers = (stateQuantity, mockedItems) => {
    const reducers = [];
    for (let i = 0; i < stateQuantity; i++) {
        reducers[`idsTestList${i}`] = (state = [], action) => {
            switch (action.type) {
                case `Test${i}:list.load`:
                    return mockedItems[i].ids;
                default:
                    return state;
            }
        };
        reducers[`byIdsTestList${i}`] = (state = {}, action) => {
            switch (action.type) {
                case `Test${i}:list.load`:
                    return mockedItems[i].byIds;
                default:
                    return state;
            }
        };
        reducers[`countersTestList${i}`] = (state = {}, action) => {
            switch (action.type) {
                case `Test${i}:list.load`:
                    return mockedItems[i].counters;
                case `Test${i}:list.increaseCounter`:
                    return {
                        ...state,
                        [action.id]: state[action.id] + 1
                    };
                default:
                    return state;
            }
        };
    }
    return reducers;
};