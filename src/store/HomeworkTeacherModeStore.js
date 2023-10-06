import { DraggableItemTypes } from "../utils/DraggableItemTypes";
import uuid from "react-uuid";
import { makeAutoObservable } from "mobx";
import {
    createLesson,
    updateLesson,
} from "../services/apiResponseParsers/lessonParser";

export class HomeworkTeacherModeStore {
    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    homework = {
        map: "",
        pieces: [],
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

    setMap = (base64) => {
        this.homework.map = base64;
    };

    setPieces = (pieces) => {
        this.homework.pieces = pieces;
        let defaultPieces = [];
        Object.entries(DraggableItemTypes).forEach((itemName) => {
            defaultPieces.push({
                type: itemName[0],
                position: {
                    x: 0,
                    y: 0,
                },
                isDeployed: false,
                id: uuid(),
            });
        });

        this.homework.pieces = [...this.homework.pieces, ...defaultPieces];
    };

    addPiece = ({ position, type }) => {
        this.homework.pieces = [
            ...this.homework.pieces,
            {
                type,
                position,
                isDeployed: true,
                id: uuid(),
            },
        ];
    };

    init = () => {
        Object.values(DraggableItemTypes).forEach((type) => {
            this.homework.pieces = [
                ...this.homework.pieces,
                {
                    position: {
                        x: 0,
                        y: 0,
                    },
                    type,
                    isDeployed: false,
                    id: uuid(),
                },
            ];
        });
    };

    removePiece = (id) => {
        this.homework.pieces = this.homework.pieces.filter((p) => p.id !== id);
    };

    hasItemsOnCard = () => {
        return this.homework.pieces.length !== 0;
    };

    sendToTheServer = (token, model, isNewLesson) => {
        let outputPieces = [];
        this.homework.pieces.forEach((piece) => {
            if (piece["position"]["x"] !== 0 && piece["position"]["y"] !== 0) {
                outputPieces.push(piece);
            }
        });

        let content = {
            type: "map",
            name: model.name,
            description: model.description,
            content: JSON.stringify({
                map: this.homework.map,
                pieces: outputPieces,
            }),
        };

        if (isNewLesson)
            createLesson(token, { ...content, fileId: uuid() }).then(
                (isSuccess, content) => {}
            );
        else {
            updateLesson(token, {
                ...content,
                fileId: model.fileId,
                id: model.id,
            }).then((isSuccess, content) => {});
        }
        this.onDesctruct();
    };

    onDesctruct = () => {
        this.homework = {
            map: "",
            pieces: [],
        };
    };
}

export const homeworkTeacherModeStore = new HomeworkTeacherModeStore();
