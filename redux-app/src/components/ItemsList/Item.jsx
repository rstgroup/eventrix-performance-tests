import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/actions";
import Counter from "./Counter";

window.performanceDiffList = [];

const Item = ({id, listNumber}) => {
    const item = useSelector((state) => {
        return state[`byIdsTestList${listNumber}`][id] || {};
    });
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        const action = actions.increaseEventsActions[`increaseCounterListTest${listNumber}`];
        const t1 = performance.now();
        dispatch(action(id));
        const t2 = performance.now();
        const diff = t2 - t1;
        window.performanceDiffList.push(diff);
        console.log(diff);
    }, [dispatch, id, listNumber]);
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
