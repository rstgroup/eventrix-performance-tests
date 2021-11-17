import React, {useCallback, useState} from "react";
import {simulate} from "../simulator";

const Toolbar = () => {
    const [counter, setCounter] = useState(0);
    const updateTotalCounter = useCallback(() => {
        const total = Object.keys(document.getElementsByClassName('messages-counter')).map(index => document.getElementsByClassName('messages-counter')[index].textContent).reduce((a,b) => parseInt(a)+parseInt(b))
        setCounter(total);
    }, [setCounter]);
    const onClickSimulate = useCallback(() => {
        simulate(updateTotalCounter);
    }, [updateTotalCounter]);
    return (
        <div className="toolbar">
            <div className="simulation">
                <button onClick={onClickSimulate}>START SIMULATION</button>
            </div>
            {!!counter && <div className="total-counter">RESULTS: {counter}</div>}
        </div>
    )
};

export default Toolbar;
