import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import {List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import {JSX} from "react";
import Dropzone from "react-dropzone";
import {Control, Controller } from "react-hook-form";

const root = {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
}

const icon = {
    marginTop: "16px",
    color: "#888888",
    fontSize: "42px",
};

const DropInput = ({ control, name }: {control:  Control<IStepThreeForms>, name: "acceptedFiles"}): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: {onChange, onBlur, value}}) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant="outlined"
                sx={root}
                {...getRootProps()}
              >
                <CloudUpload sx={icon}/>
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f: File, index: number) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
}
export default DropInput;
