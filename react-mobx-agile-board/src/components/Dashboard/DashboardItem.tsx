import {FC, JSX} from "react";
import {Box, Grid, Paper, Typography} from "@mui/material";
import {Droppable} from "react-beautiful-dnd";
import Column from "./Column";
import { observer } from "mobx-react-lite";
import {toJS} from "mobx";
import task from "./Task";

const DashboardItem: FC<IBoardSection> = ({id, title, tasks}): JSX.Element => {

  const getListStyle = (val: boolean) => {
    return {
      backgroundColor: val ? 'lightblue' : 'lightgray',
      padding: 8,
      minHeight: 500,
    }
  }

  console.log('DashboardItem >>> ', id, toJS(task));

  return (
    <Grid item>
      <Paper>
        <Box p={1}
             display={'flex'}
             alignItems={"center"}
             justifyContent={"center"}>
          <Typography variant="h5">
            {title}
          </Typography>
        </Box>
        <Droppable droppableId={'section.id'}>
          {(provided, snapshot) => (<div {...provided.droppableProps} ref={provided.innerRef}
                                         style={getListStyle(snapshot.isDraggingOver)}>{provided.placeholder}
            <Column tasks={tasks}/>

          </div>)}
        </Droppable>
      </Paper>
    </Grid>
  );
}
export default observer(DashboardItem);
