import React from "react";
import classes from "./SelectItem.module.css";
const SelectItem = (props) => {
    return (
        <select
            className={classes.selectItem}
            name=""
            id=""
            onChange={(e) => props.onChange(e)}
        >
            <option value={""} color="gray">
                Выберите роль
            </option>
            {props.items.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default SelectItem;
