import React from "react";
import {useEventrixState} from "eventrix";
import "../../styles/Counter.css";

const Counter = ({id, listNumber}) => {
    const [counter] = useEventrixState(`countersTestList${listNumber}.${id}`);
    if (counter === 0) {
        return null;
    }
    return <div className="messages-counter" style={{background: counter % 2 ? 'red' : 'green'}}>{counter}</div>;
};

export default Counter;
