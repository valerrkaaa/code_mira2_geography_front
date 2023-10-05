import React, { useEffect } from "react";
import classes from "./BlockCourses.module.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const BlockCourses = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.mainContent}
      onClick={(e) => {
        navigate("/performcourses");
      }}
    >
      <h1 className={classes.courseTittle}>{props.name}</h1>
      <img className={classes.imgCourses} src={props.photo} alt={"Not Found"} />
    </div>
  );
};

export default BlockCourses;
