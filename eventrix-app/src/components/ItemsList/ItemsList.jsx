import React, {useEffect} from "react";
import {useEmit, useEventrixState} from "eventrix";
import {eventsNames} from "../../eventrix/eventNames";
import Item from "./Item";
import "../../styles/ItemsList.css";

const {loadEventsList} = eventsNames;

const ItemsList = ({listNumber}) => {
    const [itemsIds] = useEventrixState(`idsTestList${listNumber}`);
    const emit = useEmit();
    useEffect(() => {
        const eventName = loadEventsList[listNumber];
        emit(eventName);
    }, [emit, listNumber]);
    return (
        <div className="itemsList">
            {itemsIds.map((id) => (
                <Item id={id} key={`item-${listNumber}-${id}`} listNumber={listNumber}/>
            ))}
            {itemsIds.length < 1 && <div className="empty-list">Empty list</div>}
        </div>
    );
};

export default ItemsList;
