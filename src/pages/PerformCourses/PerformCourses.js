import React, { useEffect, useState } from "react";
import classes from "./PerformCourses.module.css";
import Header from "../../components/header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DroppableSection } from "../../components/Homework/DroppableSection/DroppableSection";
import { homeworkStore } from "../../store/HomeworkStore";
import { useParams } from "react-router-dom";
import { getHomework } from "../../services/apiResponseParsers/homeworkParser";
import { useCookies } from "react-cookie";
import { observer } from "mobx-react-lite";

const PerformCourses = observer((props) => {
    const params = useParams();
    const [isPupilFinished, setPupilFinished] = useState(false);
    const [isPupilGetMark, setPupilGetMark] = useState(false);
    const [lesson, setLesson] = useState({
        name: "",
        description: "",
    });
    const [cookies] = useCookies();

    useEffect(() => {
        getHomework(cookies.jwt, params.id).then((response) => {
            if (response[0]) {
                homeworkStore.setHomework(response[1]);
                setLesson({
                    name: response[1].name,
                    description: response[1].description,
                });
            }
        });
    }, [cookies.jwt, params.id]);

    const checkFinishedStatus = () => {
        setPupilFinished(homeworkStore.isAllIconsDeployed());
    };

    const sendAnswer = () => {
        homeworkStore.sendHomework(cookies.jwt, params.id);
    };

    return (
        <div className={classes.backGround}>
            <Header />
            <div className={classes.content}>
                <h1 className={classes.nameCourses}>{lesson.name}</h1>
                <p className={classes.textArea}>{lesson.description}</p>
                {homeworkStore.mark === 0 ? (
                    <>
                        <div className={classes.workPlace}>
                            <DndProvider backend={HTML5Backend}>
                                <DroppableSection
                                    checkFinishedStatus={checkFinishedStatus}
                                    store={homeworkStore}
                                />
                            </DndProvider>
                        </div>
                        {isPupilFinished ? (
                            <button
                                className={classes.btnSave}
                                onClick={(e) => sendAnswer()}
                            >
                                Отправить
                            </button>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <div className={classes.result}>Ваша оценка: {homeworkStore.mark}</div>
                )}
            </div>
        </div>
    );
});

export default PerformCourses;
