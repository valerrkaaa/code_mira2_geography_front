import React from 'react'
import classes from './EditableTextField.module.css'

const EditableTextField = (props) => {
  return (
    <input type='text' value={props.text} onChange={props.changeHandler} className={classes.text_block}></input>
  )
}

export default EditableTextField