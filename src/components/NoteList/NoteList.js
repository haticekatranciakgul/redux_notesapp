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
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";


const NoteList = ({ notes }) => {

  const dispatch = useDispatch();

  if (!notes || notes.length === 0) {
    return <div className='not-found'>No any notes found</div>;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <Grid container spacing={2}>
        {notes.map(note => (
          <Grid item xs={6} key={note.noteId}>
            <Item >
              <Card key={note.noteId} sx={{  height: 300, }}>
                <CardContent sx={{ boxSizing: 'border-box' , minHeight: '80%', display: 'flex', flexDirection:'column' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {note.noteTitle.substring(0, 80) + "..."}
                  </Typography>
                  <Divider sx={{ marginBottom: 3 }}></Divider>
                  <Typography variant="body2" color="text.secondary">
                    {note.noteContent.substring(0, 150) + "..."}
                  </Typography>
                </CardContent>
                <CardActions  sx={{ flexGrow:'0', flexShrink:'0' }}>
                  <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={2}>
                      <Button size="small">
                        <DeleteForeverOutlinedIcon fontSize="medium" sx={{ color: pink[500] }} onClick={() => dispatch(removeNote(note.noteId))} />
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Link to={`/edit/${note.noteId}`} size="small" >
                        <EditNoteIcon fontSize="large" />
                      </Link>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={`/note/${note.noteId}`} className='text-white td-none '>
                        <Typography textAlign='right'>Learn More..</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>




  );
}

export default NoteList;