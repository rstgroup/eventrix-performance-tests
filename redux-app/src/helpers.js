export const generateItems = (quantity) => {
    const contacts = [];
    for (let a = 0; a < quantity; a++) {
        contacts.push({
            id: a + 1,
            name: `Item ${a + 1}`,
        });
    }
    return contacts;
};

export const getUrlParam = (name) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const paramValue = params[name];
    return paramValue ? paramValue : 10;
};

export const mapItems = (items) => {
    const counters = {};
    const ids = [];
    const byIds = {};
    items.forEach((item) => {
        counters[item.id] = 0;
        byIds[item.id] = item;
        ids.push(item.id);
    });
    return {
        counters,
        ids,
        byIds
    };
};

export const getMockedItems = (stateQuantity, quantityPerList) => {
    const mockedItems = [];
    for (let i=0; i < stateQuantity; i++) {
        mockedItems[i] = mapItems(generateItems(quantityPerList))
    }
    return mockedItems;
};