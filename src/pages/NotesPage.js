import React from 'react'
import NoteList from '../components/NoteList/NoteList'
import { useSelector } from 'react-redux'
import { getAllNotes } from '../features/noteSlice'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';


const NotesPage = () => {
  const notes = useSelector(getAllNotes);

  return (
    <>
      <Typography variant="h4" >Note List</Typography>
      <Divider sx={{ marginBottom: 10, }}></Divider>
      <NoteList notes={notes} />
    </>
  )
}

export default NotesPage
