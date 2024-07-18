import React, {useState}  from 'react'
import { useDispatch } from 'react-redux';
import { addNewNote } from '../noteSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './AddNoteForm.css';



const AddNoteForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        noteTitle: "",
        noteContent: ""
    });
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [canSave, setCanSave] = useState(false);

    const onFormDataChange = (event) => {
        event.preventDefault();
        if (event.target.name === 'noteTitle') {
            if (event.target.value.length === 0) {
                setTitleError(true);
            } else {
                setTitleError(false);
                setCanSave(true);
            }
        }

        if (event.target.name === 'noteContent') {
            if (event.target.value.length === 0) {
                setContentError(true);
            } else {
                setContentError(false);
                setCanSave(true);
            }
        }

        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSaveNoteClicked = () => {
        if(!titleError && !contentError){
          dispatch(addNewNote(formData));
          toast("New Note added successfully");
          setFormData({noteTitle: "", noteContent: ""});
        }
      }

    return (
        <>
            <h4>Add New Note</h4>
            <Container maxWidth="sm">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography className='text-label'>Title: </Typography>
                            <TextField id="noteTitle" name='noteTitle' onChange={onFormDataChange} value={FormData.noteTitle} label="Note Title" variant="outlined"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className='text-label' >Content:</Typography>
                            <TextField id="noteContent" name='noteContent' onChange={onFormDataChange} value={FormData.noteContent} label="Note Content" variant="outlined"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto',
                                }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={(onSaveNoteClicked)} disabled={!canSave}>Save Note</Button>
                        </Grid>
                        <ToastContainer />
                    </Grid>
                </Box>

            </Container>


        </>
    )
}

export default AddNoteForm
