import React from "react";
import classes from './EditTablePhotoField.module.css'

const EditTablePhotoField = (props) => {
    return (
        <input
            type="image"
            src={props.photo}
            onChange={props.changeHandler}
            className={classes.text_block}
            alt = {props.alt}
        ></input>
    );
};

export default EditTablePhotoField;
