import React from 'react'
import AddNoteForm from "../features/AddNoteForm/AddNoteForm";
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const AddNotes = () => {
  return (
    <>
      <Typography variant="h4" >Add Note</Typography>
      <Divider sx={{ marginBottom: 3 }}></Divider>
      <AddNoteForm></AddNoteForm>

    </>
  )
}

export default AddNotes
