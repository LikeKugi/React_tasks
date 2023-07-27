import {JSX} from "react";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore";
import {Box, Grid} from "@mui/material";
import {DragDropContext} from "react-beautiful-dnd";
import DashboardItem from "./DashboardItem";
import {toJS} from "mobx";


const Dashboard = (): JSX.Element => {
  const {boards} = useStore();

  const dropHandler = () => {
    console.log('drop')
  }

  console.log('Dashboard >>> ', toJS(boards.active));

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={dropHandler}>
        <Grid container>
          {boards.active?.sections.map(section => <DashboardItem id={section.id as string}
                                                               title={section.title}
                                                               tasks={section.tasks as unknown as IBoardSection[]}
                                                               key={section.id}/>)}
        </Grid>
      </DragDropContext>
    </Box>
  );
}
export default observer(Dashboard);
