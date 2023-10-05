import React from "react";
import classes from "./BlockCourses.module.css";
import logo from "../../assets/logo.jpg";

const BlockCourses = (props) => {
  return (
    <div className={classes.pageCourses}>
      <div className={classes.mainContent}>
        <h1 className={classes.courseTittle}>{props.Tittle}</h1>
        <img className={classes.imgCourses} src={logo} alt={"Not Found"} />
      </div>
    </div>
  );
};

export default BlockCourses;
