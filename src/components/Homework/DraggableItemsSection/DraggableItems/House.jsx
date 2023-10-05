import {DraggableItem} from "./DraggableItem";

import s from './DraggableItems.module.css';
import icon from '../../../../assets/house.svg'

export const HouseIcon = () => {
    return (
        <img src={icon}
             alt="house"
             className={s.draggableIcon}
        />
    )
};

export const House = ({data, store}) => {
    return (

        <DraggableItem data={data}
                       store={store}
        >
            <HouseIcon/>
        </DraggableItem>

    )
};