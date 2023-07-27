import React, { FC } from 'react';
import {CardContent, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";

interface ITaskProps {
  task: ITask
}
const Task: FC<ITaskProps> = ({task}) => {
  return (
    <CardContent>
      <Typography color={'textPrimary'} gutterBottom style={{fontSize: 18}}>
        {task.title}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {task.description}
      </Typography>
      {/* <User user={task.assignee} /> */}
    </CardContent>
  );
};

export default observer(Task);
