import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {FC, JSX} from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from '@mui/icons-material/Image';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { UseFormRegister } from "react-hook-form";

interface IFileInputProps {
  register: UseFormRegister<IStepThreeForms>;
}


const FileInput: FC<IFileInputProps> = ({register}): JSX.Element => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map((file: File) => (
    <ListItem key={file.name}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={file.name} secondary={file.size + ' bytes'} />
    </ListItem>
  ));

  return (
    <>
      <div {...getRootProps({className: 'dropzone'})} style={{backgroundColor: '#c9c9c9', padding: '10px 15px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', marginBottom:
      '15px'}}>
        <DriveFolderUploadIcon />
        <input {...getInputProps()} {...register("acceptedFiles")} />
        <Typography variant="body2" component={"p"}>Click here to select files</Typography>
      </div>
      {!!acceptedFiles.length && <Box>
        <Typography variant={"h4"}
                    component={"h3"}>Files</Typography>
        <List sx={{width: '100%', backgroundColor: 'background.paper'}}>{files}</List>
      </Box>}
    </>
  );
}
export default FileInput;
