import React from "react";
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
      <h1 className={classes.courseTittle}>{props.Tittle}</h1>
      <img className={classes.imgCourses} src={props.img} alt={"Not Found"} />
    </div>
  );
};

export default BlockCourses;
