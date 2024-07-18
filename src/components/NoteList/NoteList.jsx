import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { pink } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { removeNote } from '../../features/noteSlice';

const NoteList = ({ notes }) => {
  const dispatch = useDispatch();

  if (!notes || notes.length === 0) {
    return <div className='not-found'>No any notes found</div>;
  }

  return (
    <>
      {notes.map(note => (
        <Card sx={{ maxWidth: 345, bgcolor: '#bdbdbd', }} key={note.noteId}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {note.noteTitle.substring(0, 80) + "..."}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Note Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note.noteContent.substring(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={2}>
              <Button size="small">
                <DeleteForeverOutlinedIcon fontSize="medium" sx={{ color: pink[500] }} onClick={() => dispatch(removeNote(note.noteId))} />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size="small" >
                <EditNoteIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Typography textAlign='right'>Learn More..</Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>

      ))}
    </>
  );
}

export default NoteList;
