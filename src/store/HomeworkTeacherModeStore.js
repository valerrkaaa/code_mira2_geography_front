import { DraggableItemTypes } from "../utils/DraggableItemTypes";
import uuid from "react-uuid";
import { makeAutoObservable } from "mobx";
import {
    createLesson,
    updateLesson,
} from "../services/apiResponseParsers/homeworkParser";

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

        console.log('content', content);

        if (isNewLesson)
            createLesson(token, { ...content, fileId: uuid() }).then(
                (isSuccess, content) => {}
            );
        else {
            updateLesson(token, { ...content, fileId: model.fileId }).then(
                (isSuccess, content) => {}
            );
        }
    };
}

export const homeworkTeacherModeStore = new HomeworkTeacherModeStore();
