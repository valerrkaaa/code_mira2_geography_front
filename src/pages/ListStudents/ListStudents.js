import React from "react";
import classes from "./ListStudent.module.css";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "react-bootstrap";

const Liststudents = (props) => {
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.content}>
        {/* класс как сущность */}
        <div className={classes.classTittle}>
          <div className={classes.headerClass}>
            <h2>{props.class}</h2>
            <Button>
              <ArrowDownwardIcon />
            </Button>
          </div>
          {/* список студентов */}
          <div className={classes.Letter}>
            <div className={classes.rowstudent}>{props.namestudent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liststudents;
