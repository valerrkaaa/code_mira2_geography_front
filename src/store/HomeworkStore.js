import { DraggableItemTypes } from "../utils/DraggableItemTypes";
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
        pieces: [
            {
                /**
                 *  type of draggable element
                 *  @type {DraggableItemTypes.}
                 */
                type: DraggableItemTypes.HOUSE,

                /**
                 * position of the element
                 * @type {{x: number, y: number}}
                 */
                position: {
                    x: 0,
                    y: 0,
                },

                /**
                 * has user touched element
                 * @type {boolean}
                 */
                isDeployed: false,

                /**
                 * piece id
                 * @type {string}
                 */
                id: uuid(),
            },

            {
                type: DraggableItemTypes.HOUSE,

                position: {
                    x: 0,
                    y: 0,
                },

                isDeployed: false,

                id: uuid(),
            },
            {
                type: DraggableItemTypes.TREE,

                position: {
                    x: 0,
                    y: 0,
                },

                isDeployed: false,

                id: uuid(),
            },
            {
                type: DraggableItemTypes.CAR,

                position: {
                    x: 0,
                    y: 0,
                },

                isDeployed: false,

                id: uuid(),
            },
        ],
    };

    setHomeworkMap = (map) => {
        this.homework.map = map;
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
        sendHomeworkAnswer(token, output).then((response) => {
            console.log(response);
        });
    };
}

export const homeworkStore = new HomeworkStore();
