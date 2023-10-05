import React from "react";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuContent}>
        <div className={classes.menuHeader}>{props.header}</div>
        <ul>
          {props.items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
