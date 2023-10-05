import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DraggableItemsSection} from "./DraggableItemsSection/DraggableItemsSection";
import {DroppableSection} from "./DroppableSection/DroppableSection";
import {homeworkStore} from "../../store/HomeworkStore";
import {homeworkTeacherModeStore} from "../../store/HomeworkTeacherModeStore";

export const Homework = () => {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <DroppableSection store={homeworkStore}/>

                <DroppableSection store={homeworkTeacherModeStore}/>
            </DndProvider>
            Hw
        </div>
    )
};