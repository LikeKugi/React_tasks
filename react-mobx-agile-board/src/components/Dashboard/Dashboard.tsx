import {JSX} from "react";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import {Box, Grid} from "@mui/material";
import {DragDropContext} from "react-beautiful-dnd";
import DashboardItem from "./DashboardItem";


const Dashboard = (): JSX.Element => {
  const {boards} = useStore();

  const dropHandler = () => {
    console.log('drop')
  }

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={dropHandler}>
        <Grid container>
          {boards.boards.map(board => <DashboardItem id={board.id as string} title={board.title} tasks={board.sections} />)}
        </Grid>
      </DragDropContext>
    </Box>
  );
}
export default observer(Dashboard);
