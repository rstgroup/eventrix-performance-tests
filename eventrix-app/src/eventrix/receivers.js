import {generateIncreaseReceivers, generateLoadReceivers} from "../eventrixhelpers";
import {getUrlParam} from "../helpers";
import mockedItems from "../mockedItems";

const stateQuantity = getUrlParam('s');

const loadReceivers = generateLoadReceivers(stateQuantity, mockedItems);
const increaseReceivers = generateIncreaseReceivers(stateQuantity);

const receivers = [
    ...loadReceivers,
    ...increaseReceivers,
];
export default receivers;
