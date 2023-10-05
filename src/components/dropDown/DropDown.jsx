import React from "react";
import classes from "./DropDown.module.css";
import MenuIcon from "@mui/icons-material/Menu";
const DropDown = (props) => {
  return (
    <div className={classes.dropDown}>
      <h2 className={classes.tittleDropDown}>UNITS</h2>
      <hr className={classes.dropDown_Line}></hr>
      <ul className={classes.dropDown_List}>
        {props.items.map((item) => (
          <li>
            <a className={classes.dropDown_Item} href={item.href}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
