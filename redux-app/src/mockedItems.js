import { getMockedItems, getUrlParam } from "./helpers";

const stateQuantity = getUrlParam('s');
const quantityPerList = getUrlParam('q');

export default getMockedItems(stateQuantity, quantityPerList);