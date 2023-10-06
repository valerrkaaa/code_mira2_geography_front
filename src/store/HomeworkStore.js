import uuid from "react-uuid";
import { makeAutoObservable } from "mobx";
import { sendHomeworkAnswer } from "../services/apiResponseParsers/homeworkParser";

class HomeworkStore {
    constructor() {
        makeAutoObservable(this);
    }

    /**
     * stores current homework, which student is doing
     */
    homework = {
        /**
         * map url
         * @type {string}
         */
        map: "",

        /**
         * describes pieces, that should be deployed on the map
         * @type {Array}
         */
        pieces: [],
    };

    setHomework = (homework) => {
        this.homework.map = homework.map;
        let newPieces = [];
        homework.pieces.forEach((item) => {
            newPieces.push({
                type: item.type,
                id: item.id,
                position: {
                    x: 0,
                    y: 0,
                },

                isDeployed: false,
            });
        });
        this.homework.pieces = newPieces;
    };

    setPieceCoords = ({ id, position }) => {
        this.homework.pieces = this.homework.pieces.map((p) => {
            if (p.id === id) {
                return {
                    ...p,
                    position,
                    isDeployed: true,
                };
            } else {
                return p;
            }
        });
    };

    isAllIconsDeployed = () => {
        let is = true;
        this.homework.pieces.forEach((element) => {
            is &= element.isDeployed === true;
        });
        return is;
    };

    sendHomework = (token, lessonId) => {
        let output = {
            map: this.homework.map,
            pieces: this.homework.pieces,
            lesson_id: lessonId,
            fileId: uuid(),
        };
        console.log(JSON.stringify(output.pieces));
        sendHomeworkAnswer(token, output).then(([isSuccess, content]) => {
            if (isSuccess){
                console.log(content);
            }
        });
        this.onDesctruct();
    };
    onDesctruct = () => {
        this.homework = {
            map: "",
            pieces: [],
        };
    };
}

export const homeworkStore = new HomeworkStore();
