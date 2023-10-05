import icon from "../../../../assets/tree.svg";
import s from "./DraggableItems.module.css";
import {DraggableItem} from "./DraggableItem";

export const TreeIcon = () => {
    return (
        <img src={icon}
             alt="tree"
             className={s.draggableIcon}
        />
    )
};

export const Tree = ({data, store}) => {
    return (

        <DraggableItem data={data}
                       store={store}
        >
            <TreeIcon/>
        </DraggableItem>

    )
};