import React from "react";
import classes from "./DropDown.module.css";

const DropDown = (props) => {
    return (
        <div className={classes.dropDown}>
            <h2 className={classes.tittleDropDown}>UNITS</h2>
            <hr className={classes.dropDown_Line}></hr>
            <ul className={classes.dropDown_List}>
                {props.items.map((item) => {
                    return (
                        <li key={item.href}>
                            <a
                                className={classes.dropDown_Item}
                                href={item.href}
                            >
                                {item.value}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DropDown;
