import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/actions";
import Item from "./Item";
import "../../styles/ItemsList.css";

const ItemsList = ({listNumber}) => {
    const itemsIds = useSelector((state) => {
        return state[`idsTestList${listNumber}`] || [];
    });
    const dispatch = useDispatch();
    useEffect(() => {
        const action = actions.loadEventsActions[`loadListTest${listNumber}`];
        dispatch(action());
    }, [dispatch, listNumber]);
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
