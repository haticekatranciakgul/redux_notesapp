import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewNote } from '../noteSlice';
import { addNotification } from '../notificationSlice'; // Yeni eklenen slice
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Button, Typography } from '@mui/material';
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
        const { name, value } = event.target;

        if (name === 'noteTitle') {
            setTitleError(value.length === 0);
        }

        if (name === 'noteContent') {
            setContentError(value.length === 0);
        }

        setCanSave(value.length > 0);

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSaveNoteClicked = () => {
        if (!titleError && !contentError) {
            dispatch(addNewNote(formData));
            toast("New Note added successfully");

            // Bildirim ekleyin
            dispatch(addNotification({ message: `New note added: ${formData.noteTitle}` }));

            setFormData({ noteTitle: "", noteContent: "" });
        }
    };

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography className='text-label' sx={{ marginBottom: 3 }}>Title: </Typography>
                            <TextField
                                id="noteTitle"
                                name='noteTitle'
                                onChange={onFormDataChange}
                                value={formData.noteTitle}
                                label="Note Title"
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className='text-label' sx={{ marginBottom: 3 }}>Content:</Typography>
                            <TextField
                                id="noteContent"
                                name='noteContent'
                                onChange={onFormDataChange}
                                value={formData.noteContent}
                                label="Note Content"
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={onSaveNoteClicked} disabled={!canSave}>Save Note</Button>
                        </Grid>
                        <ToastContainer />
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default AddNoteForm;
