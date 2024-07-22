import React from 'react'
import { useSelector } from 'react-redux';
import { getAllNotes } from '../features/noteSlice';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SingleNotePage = () => {
    const { id } = useParams();
    const notes = useSelector(getAllNotes);
    let tempNote = notes.filter(note => note.noteId === id);
  return (
    <Box sx={{ width: '100%' }}>
     
      <Typography variant="h4" gutterBottom>
      {tempNote[0].noteTitle}
      </Typography>
      <Typography variant="body1" gutterBottom>
      {tempNote[0].noteContent}
      </Typography>

    </Box>


 
  )
}

export default SingleNotePage
