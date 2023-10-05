import React, { useEffect, useState } from "react";
import classes from "./CreateCourses.module.css";
import Header from "../../components/header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DroppableSection } from "../../components/Homework/DroppableSection/DroppableSection";
import { homeworkTeacherModeStore } from "../../store/HomeworkTeacherModeStore";
import { useCookies } from "react-cookie";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const CreateCourses = observer(() => {
    const navigate = useNavigate();
    const [cookie] = useCookies(["jwt"]);
    const [isValid, setValid] = useState(false);
    const [model, setModel] = useState({
        name: "",
        description: "",
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                homeworkTeacherModeStore.setMap(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("Файл не является изображением");
        }
    };

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    useEffect(() => {
        setValid(homeworkTeacherModeStore.hasItemsOnCard && model.name);
    }, [homeworkTeacherModeStore.homework, model]);

    const save = () => {
        homeworkTeacherModeStore.sendToTheServer(cookie.jwt, model);
        navigate("/courses");
    };

    return (
        <div className={classes.backGround}>
            <Header />
            <div className={classes.content}>
                <input
                    className={classes.nameCourses}
                    placeholder="название курса"
                    type="text"
                    value={model.name}
                    onChange={(e)=> changeField("name", e.target.value)}
                ></input>
                <div className={classes.blockIput}>
                    <textarea
                        className={classes.textArea}
                        placeholder="Описание местности"
                        value={model.description}
                        onChange={(e)=> changeField("description", e.target.value)}
                    ></textarea>
                    <input
                        className={classes.btnFile}
                        type="file"
                        accept="image/jpeg, image/png"
                        onChange={handleFileChange}
                    />
                </div>
                {homeworkTeacherModeStore.homework.map !== "" ? (
                    <>
                        <div className={classes.workPlace}>
                            <DndProvider backend={HTML5Backend}>
                                <DroppableSection
                                    store={homeworkTeacherModeStore}
                                />
                            </DndProvider>
                        </div>
                        {isValid ? (
                            <button
                                onClick={(e) => {
                                    save();
                                }}
                                className={classes.btnSave}
                            >
                                Сохранить
                            </button>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
});

export default CreateCourses;
