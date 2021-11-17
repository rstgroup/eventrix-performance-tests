import React from "react";
import {getUrlParam} from "../helpers";

const Info = () => {
    const states = parseInt(getUrlParam('s'));
    const perList = parseInt(getUrlParam('q'));
    return (
        <div className="infobox">
            <div>States in store: {states * 3}</div>
            <div>Items per list: {perList}</div>
            <div>Total items: {perList*states}</div>
        </div>
    )
};

export default Info;
