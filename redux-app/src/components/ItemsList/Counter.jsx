import React, {useCallback} from "react";
import "../../styles/Counter.css";
import {useSelector} from "react-redux";

const Counter = ({id, listNumber}) => {
    const selector = useCallback((state) => {
        return state[`countersTestList${listNumber}`][id] || 0;
    }, [listNumber, id]);

    const counter = useSelector(selector);
    if (counter === 0) {
        return null;
    }
    return <div className="messages-counter" style={{background: counter % 2 ? 'red' : 'green'}}>{counter}</div>;
};

export default Counter;
