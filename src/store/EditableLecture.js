import { makeAutoObservable } from "mobx";
import {
    getLecturePageApi,
    sendLecturePageApi,
} from "../services/lecturePageRequests/LecturePageApi";
import uuid from "react-uuid";

class editableLecture {
    lectureName = "";
    contentList = {};

    constructor() {
        makeAutoObservable(this);
    }
    
    loadData = (jwt, fileId) => {
        (async () => {
            getLecturePageApi(jwt, fileId)
                .then((response) => {
                    const raw_data = JSON.parse(response.data.json);
                    this.setLectureName(raw_data.info.filename);
                    this.setContentList(raw_data.content);
                })
                .catch((error) => {
                    // console.log(
                    //     "TODO in LecturePage.jsx: get",
                    //     error.response.data
                    // ); // todo->front сделать отображение при ошибках: unauthorized и file not found
                });
        })();
    };

    saveData = (jwt, fileId) => {
        let model = {
            fileId: fileId,
            data: JSON.stringify({
                info: { filename: this.lectureName },
                content: this.contentList,
            }),
        };
        (async () => {
            // sendLecturePageApi(jwt, model)
            //     .then((response) => console.log("set", response.data))
            //     .catch((error) => {
            //         console.log("set", error.response); // todo->front сделать отображение ошибки при ошибке загрузки
            //     });
        })();
    };

    updateItem(id, value) {
        let item = this.contentList[id];
        if (item.type === "text") {
            item.text = value;
        }
        else if (item.type === "photo") {
            item.photo = value;
        }
    }

    createItem(type) {
        let model = {};
        if (type === "text") {
            model = {
                type: type,
                text: "",
            };
        }
        else if (type === "photo") {
            model = {
                type: type,
                photo: ""
            };
        }
        this.contentList[uuid()] = model;
    }

    setLectureName(lecureName) {
        this.lectureName = lecureName;
    }

    setContentList(content) {
        this.contentList = content;
    }
}

export default new editableLecture();
