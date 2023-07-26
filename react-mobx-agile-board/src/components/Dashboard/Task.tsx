import React, { FC } from 'react';
import {CardContent, Typography} from "@mui/material";
import { toJS } from 'mobx';

interface ITaskProps {
  task: ITask
}
const Task: FC<ITaskProps> = ({task}) => {
  console.log(toJS(task));
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

export default Task;
