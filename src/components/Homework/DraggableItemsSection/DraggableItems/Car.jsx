import icon from "../../../../assets/car.svg";
import s from "./DraggableItems.module.css";
import {DraggableItem} from "./DraggableItem";

export const CarIcon = () => {
    return (
        <img src={icon}
             alt="car"
             className={s.draggableIcon}
        />
    )
};

export const Car = ({data, store}) => {
    return (

        <DraggableItem data={data}
                       store={store}
        >
            <CarIcon/>
        </DraggableItem>

    )
};