import React, {useMemo} from "react";
import {House, HouseIcon} from "./DraggableItems/House";
import {observer} from "mobx-react-lite";
import {DraggableItemTypes} from "../../../utils/DraggableItemTypes";
import s from './DraggableItemsSection.module.css'
import {DraggableItemCollection} from "./DraggableItemCollection/DraggableItemCollection";
import {isTeacherMode} from "../../../utils/InferHomeworkStore";
import {Tree, TreeIcon} from "./DraggableItems/Tree";
import {Car, CarIcon} from "./DraggableItems/Car";


const DraggableItemConfigByType = {
    [DraggableItemTypes.HOUSE]: {
        IconComponent: HouseIcon,
        DraggableComponent: House
    },
    [DraggableItemTypes.TREE]: {
        IconComponent: TreeIcon,
        DraggableComponent: Tree
    },
    [DraggableItemTypes.CAR]: {
        IconComponent: CarIcon,
        DraggableComponent: Car
    },

};

export const DraggableItemsSection = observer(({store}) => {

    const pieces = store.homework.pieces;

    const items = useMemo(() => {

        const items = {};

        const handledTypes = [];

        pieces.forEach(p => {
            if (!handledTypes.includes(p.type)) {
                handledTypes.push(p.type);
                items[p.type] = [p];
            } else {
                items[p.type].push(p)
            }
        });

        return items;

    }, [pieces]);

    return (
        <div className={s.wrapper}>
            {
                Object.keys(items)
                    .map(type =>
                        <DraggableItemCollection
                            ItemIconComponent={DraggableItemConfigByType[type].IconComponent}
                            DraggableItemComponent={DraggableItemConfigByType[type].DraggableComponent}
                            items={items[type]}
                            key={type}
                            store={store}
                        />
                    )
            }
        </div>
    )
});