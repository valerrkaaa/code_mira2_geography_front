import React from "react";
import classes from "./PerformCourses.module.css";
import Header from "../../components/header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DroppableSection } from "../../components/Homework/DroppableSection/DroppableSection";
import { homeworkStore } from "../../store/HomeworkStore";

const PerformCourses = (props) => {
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.content}>
        <h1 className={classes.nameCourses}>{props.Tittle}</h1>
        <p className={classes.textArea}>{props.textArea}</p>
        <div className={classes.workPlace}>
          <DndProvider backend={HTML5Backend}>
            <DroppableSection store={homeworkStore} />
          </DndProvider>
        </div>
        <button className={classes.btnSave}>Отправить</button>
      </div>
    </div>
  );
};

export default PerformCourses;
