import React from 'react';
import {CardContent, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import User from '../common/User';

interface ITaskProps {
  id: string | number
  title: string
  description: string
  assignee?: IUser | string
}
const Task = ({task}: {task: ITaskProps}) => {
  return (
    <CardContent>
      <Typography color={'textPrimary'} gutterBottom style={{fontSize: 18}}>
        {task.title}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {task.description}
      </Typography>
      {task.assignee && typeof task.assignee !== 'string' && <User user={task.assignee}/>}
    </CardContent>
  );
};

export default observer(Task);
