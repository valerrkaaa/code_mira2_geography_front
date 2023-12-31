import React, { useEffect, useState } from "react";
import classes from "./BlockCourses.module.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "react-bootstrap";
import ClearIcon from "@mui/icons-material/Clear";
import SettingsIcon from "@mui/icons-material/Settings";
import { deleteLesson } from "../../services/apiResponseParsers/lessonParser";

const BlockCourses = (props) => {
    const navigate = useNavigate();
    const [cookies] = useCookies();
    const [isTeacher, setIsTeacher] = useState(true);
    useEffect(() => {
        setIsTeacher(cookies.role === "teacher");
    }, [cookies]);

    const deleteItem = () => {
      deleteLesson(cookies.jwt, props.id)
      props.deleteLessonById(props.id)
    }

    return (
        <div
            className={classes.mainContent}
            onClick={(e) => {
                navigate(`/performcourses/${props.id}`);
            }}
        >
            <div className={classes.bodyContainer}>
                <h1 className={classes.courseTittle}>{props.name}</h1>
                <img
                    className={classes.imgCourses}
                    src={props.photo}
                    alt={"Not Found"}
                />
            </div>
            {isTeacher && props.needShowButtons ? (
                <div className={classes.control}>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/createcourses/${props.id}`);
                        }}
                        className={classes.btnSetting}
                    >
                        <SettingsIcon />
                    </Button>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteItem();
                        }}
                        className={classes.btnDelete}
                    >
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
