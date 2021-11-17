import React, {useCallback} from "react";
import Counter from "./Counter";
import {useEmit, useEventrixState} from "eventrix";
import {eventsNames} from "../../eventrix/eventNames";

const {increaseEventsList} = eventsNames;
window.performanceDiffList = [];

const Item = ({id, listNumber}) => {
    const [item] = useEventrixState(`byIdsTestList${listNumber}.${id}`);
    const emit = useEmit();
    const onClick = useCallback(() => {
        const eventName = increaseEventsList[listNumber];
        const t1 = performance.now();
        emit(eventName, id);
        const t2 = performance.now();
        const diff = t2 - t1;
        window.performanceDiffList.push(diff);
        console.log(diff);
    }, [emit, id, listNumber]);
    return (
        <div
            className="item-list-item"
            onClick={onClick}
        >
            <div className="item-name">
                {item.name}
            </div>
            <Counter id={id} listNumber={listNumber}/>
        </div>
    );
};

export default Item;
