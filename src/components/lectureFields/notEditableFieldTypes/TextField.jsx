import React from 'react'
import classes from './TextField.module.css'

const TextField = (props) => {
  return (
    <div className={classes.text_block} value={props.text} onChange={props.changeHandler}>{props.text}</div>
  )
}

export default TextField