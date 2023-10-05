import React from "react";
import classes from "./ListStudent.module.css";
import Header from "../../components/header/Header";

const Liststudents = () => {
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.content}></div>
    </div>
  );
};

export default Liststudents;
