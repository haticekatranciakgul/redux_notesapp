import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, getAllNotes } from '../noteSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const EditNoteForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const notes = useSelector(getAllNotes);
    let tempNote = notes.filter(note => note.noteId === id);

    const [formData, setFormData] = useState(tempNote[0]);
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [canSave, setCanSave] = useState(true);

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
        if (!titleError && !contentError) {
            console.log(formData);
            dispatch(editNote(formData));
            toast("Note edited successfully");
            setFormData({ noteTitle: "", noteContent: "" });
        }
    }

    return (
        <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className='text-label' sx={{ marginBottom: 3 }}>Title: </Typography>
                    <TextField id="noteTitle" name='noteTitle' onChange={onFormDataChange} value={formData.noteTitle} label="Note Title" variant="outlined"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'auto',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography className='text-label' sx={{ marginBottom: 3 }} >Content:</Typography>
                    <TextField id="noteContent" name='noteContent' onChange={onFormDataChange} value={formData.noteContent} label="Note Content" variant="outlined"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'auto',
                        }} 
                    />
                     <span className='form-error-text'>{contentError ? "Content can't be empty!" : ""}</span>    
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={(onSaveNoteClicked)} disabled={!canSave}>Save Note</Button>
                </Grid>
                <ToastContainer />
            </Grid>
        </Box>

    </Container>

       
    )
}

export default EditNoteForm
