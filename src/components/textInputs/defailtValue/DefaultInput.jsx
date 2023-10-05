import React from "react";
import classes from "./DefaultInput.module.css";

const DefaultInput = (props) => {
  return (
    <input
      className={classes.defaultInput}
      placeholder={props.placeholder}
      type={!props.type ? "text" : props.type}
      onChange={(e) => {
        props.onChange && props.onChange(e);
      }}
      value={props.value}
    ></input>
  );
};

export default DefaultInput;
