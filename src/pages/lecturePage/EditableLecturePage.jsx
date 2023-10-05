import React, { useEffect } from "react";
import classes from "./EditableLecturePage.module.css";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import EditableTextField from "../../components/lectureFields/editableFieldTypes/EditableTextField";
import EditTablePhotoField from "../../components/lectureFields/editableFieldTypes/EditTablePhotoField";
import { observer } from "mobx-react-lite";
import editableLecture from "../../store/EditableLecture.js";
import SelectItem from "../../components/textInputs/selectItem/SelectItem";

const EditableLecturePage = observer(() => {
    const params = useParams();
    const [cookies] = useCookies(["jwt"]);

    useEffect(() => {
        editableLecture.loadData(cookies.jwt, params.id);
    }, [cookies.jwt, params.id]);

    return (
        <div>
            <Header />
            <div className={classes.lesson_title}>
                {editableLecture.lectureName}
            </div>

            {Object.entries(editableLecture.contentList).map(([key, item]) => {
                switch (item.type) {
                    case "text":
                        return (
                            <>
                                <SelectItem
                                    items={["text", "photo"]}
                                    onChange={(e) =>
                                        editableLecture.updateItem(
                                            key,
                                            e.target.value
                                        )
                                    }
                                />
                                <EditableTextField
                                    key={key}
                                    text={item.text}
                                    changeHandler={(e) =>
                                        editableLecture.updateItem(
                                            key,
                                            e.target.value
                                        )
                                    }
                                />
                            </>
                        );
                    case "photo":
                        return (
                            <EditTablePhotoField
                                key={key}
                                text={item.text}
                                changeHandler={(e) =>
                                    editableLecture.updateItem(
                                        key,
                                        e.target.value
                                    )
                                }
                            />
                        );
                    default:
                        return (
                            <div className={classes.unknown_text} key={key}>
                                unknown type: {item.type}
                            </div>
                        );
                }
            })}
            <div
                onClick={(e) => editableLecture.createItem("text")}
                className={classes.btn}
            >
                Создать текст
            </div>

            <div
                onClick={(e) =>
                    editableLecture.saveData(cookies.jwt, params.id)
                }
                className={classes.btn}
            >
                Сохранить
            </div>
        </div>
    );
});

export default EditableLecturePage;
