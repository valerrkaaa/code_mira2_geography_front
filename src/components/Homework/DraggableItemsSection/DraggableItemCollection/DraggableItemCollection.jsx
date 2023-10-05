import s from './DraggableItemsCollection.module.css';
import {isTeacherMode} from "../../../../utils/InferHomeworkStore";

export const DraggableItemCollection = ({DraggableItemComponent, ItemIconComponent, items, store}) => {

    return (
        <div className={s.wrapper}>
            <div>
                <ItemIconComponent/>
                {!isTeacherMode(store) && items.filter(item => !item.isDeployed).length}
            </div>

            {
                items.map(item =>
                    <DraggableItemComponent key={item.id}
                                            data={item}
                                            store={store}
                    />
                )
            }
        </div>
    )
};