import {DraggableItemTypes} from "../../../utils/DraggableItemTypes";
import {useDrop} from "react-dnd";
import {DraggableItemsSection} from "../DraggableItemsSection/DraggableItemsSection";
import cn from 'classnames';
import s from './DroppableSection.module.css';
import {isTeacherMode} from "../../../utils/InferHomeworkStore";

export const DroppableSection = ({store, checkFinishedStatus=()=>{}}) => {
    const [{isOver}, drop] = useDrop(
        () => ({
            accept: Object.values(DraggableItemTypes),
            drop: (item, monitor) => {
                const diff = monitor.getDifferenceFromInitialOffset();

                const method = isTeacherMode(store) ? store.addPiece : store.setPieceCoords;
                method({
                    id: item.id,
                    type: item.type,
                    position: {
                        x: item.startPosition.x + diff.x,
                        y: item.startPosition.y + diff.y,
                    }
                });
                checkFinishedStatus();
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            })
        }),
        [store]
    );

    return (
        <div
            ref={drop}
            className={cn(s.wrapper, {[s.hovered]: isOver})}
        >
            <img className={s.mapImage}
                 src={store.homework.map}
                 alt="map"
            />
            <DraggableItemsSection store={store}/>
        </div>
    )
};