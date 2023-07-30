import {JSX} from "react";
import {Draggable, DraggingStyle, NotDraggingStyle} from "react-beautiful-dnd";
import {Card} from "@mui/material";
import Task from "./Task";
import {observer} from "mobx-react-lite";

interface IColumnProps {
  tasks: ITask[]
}


const Column = ({tasks}: IColumnProps): JSX.Element => {
  const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => {
    return {
      padding: 8,
      marginBottom: 8,
      ...draggableStyle,
    }
  }


  return (
    <div>
      {tasks.map((task: ITask, idx: number) => {
        return (
          <Draggable draggableId={`${task.id}`}
                     index={idx}
                     key={`${task.id}`}>
            {(provided, snapshot) => (
              <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
               <Task task={task} />
              </Card>
            )}
          </Draggable>
        )
      })}
    </div>
  );
}
export default observer(Column);
