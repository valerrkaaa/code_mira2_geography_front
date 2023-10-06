import React, { useEffect, useState } from "react";
import classes from "./BlockCourses.module.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
import ClearIcon from "@mui/icons-material/Clear";
import SettingsIcon from "@mui/icons-material/Settings";

const BlockCourses = (props) => {
  const navigate = useNavigate();
  const [cookie] = useCookies(["role"]);
  const [isTeacher, setIsTeacher] = useState(true);
  useEffect(() => {
    console.log(cookie.role);
    setIsTeacher(cookie.role === "teacher");
  }, [cookie]);
  return (
    <div
      className={classes.mainContent}
      onClick={(e) => {
        navigate(`/performcourses/${props.id}`);
      }}
    >
      <h1 className={classes.courseTittle}>{props.name}</h1>
      <img className={classes.imgCourses} src={props.photo} alt={"Not Found"} />
      {isTeacher ? (
        <div className={classes.control}>
          <Button className={classes.btnSetting}>
            <SettingsIcon />
          </Button>
          <Button className={classes.btnDelete}>
            <ClearIcon />
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BlockCourses;
