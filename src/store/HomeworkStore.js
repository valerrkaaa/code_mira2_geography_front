import { DraggableItemTypes } from "../utils/DraggableItemTypes";
import uuid from "react-uuid";
import { makeAutoObservable } from "mobx";

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
    map: "https://www.researchgate.net/publication/281689640/figure/fig3/AS:667643862339599@1536190109545/Topographical-map-for-Siloam-Village.png",

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
          y: 0
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
        id: uuid()
      },

      {
        type: DraggableItemTypes.HOUSE,

        position: {
          x: 0,
          y: 0
        },

        isDeployed: false,

        id: uuid()
      },
      {
        type: DraggableItemTypes.TREE,

        position: {
          x: 0,
          y: 0
        },

        isDeployed: false,

        id: uuid()
      },
      {
        type: DraggableItemTypes.CAR,

        position: {
          x: 0,
          y: 0
        },

        isDeployed: false,

        id: uuid()
      }
    ]
  };

  setPieceCoords = ({ id, position }) => {
    this.homework.pieces = this.homework.pieces.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          position,
          isDeployed: true
        };
      } else {
        return p;
      }
    });
  };
}

export const homeworkStore = new HomeworkStore();
