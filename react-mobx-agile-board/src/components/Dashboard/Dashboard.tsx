import {JSX, useCallback} from "react";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import {Box, Grid} from "@mui/material";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import DashboardItem from "./DashboardItem";


const Dashboard = (): JSX.Element => {
  const {boards} = useStore();

  const dropHandler = useCallback((event: DropResult) => {
    const {source, destination, draggableId: taskID} = event;
    boards.active?.moveTask(taskID, source, destination);
  }, [boards])


  return (
    <Box p={2}>
      <DragDropContext onDragEnd={dropHandler}>
        <Grid container spacing={2} justifyContent={"space-between"}>
          {boards.active?.sections.map(section => <DashboardItem id={`${section.id}`}
                                                               title={section.title}
                                                               tasks={section.tasks as unknown as IBoardSection[]}
                                                               key={section.id}/>)}
        </Grid>
      </DragDropContext>
    </Box>
  );
}
export default observer(Dashboard);
