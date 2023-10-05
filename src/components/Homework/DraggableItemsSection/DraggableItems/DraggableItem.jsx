import {useDrag} from "react-dnd";
import s from './DraggableItems.module.css';
import {isTeacherMode} from "../../../../utils/InferHomeworkStore";

export const DraggableItem = ({data, children, store}) => {

    const {id, type, position, isDeployed} = data;

    const [{ isDragging }, drag] = useDrag(() => ({
        type,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        item: {
            id: id,
            type,
            startPosition: {
                x: position.x,
                y: position.y
            }
        }
    }), [position]);

    const handleDelete = () => {
        if (!isDeployed) return;
        store.removePiece(data.id);
    };

    return (
        <div ref={drag}
             style={{
                 opacity: isDragging ? "0.5" : "1",
                 left: `${position.x}px`,
                 top: `${position.y}px`
             }}
             className={s.draggable}
             onDoubleClick={isTeacherMode(store) ? handleDelete : undefined}
        >
            {children}
        </div>
    )
};