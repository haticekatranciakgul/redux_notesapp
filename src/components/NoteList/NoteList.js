import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { pink } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const NoteList = () => {
  return (

    <Card sx={{ maxWidth: 345,   bgcolor: '#bdbdbd' }} >
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Note Title
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Note Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} alignItems= 'center'>
          <Grid item xs={2}>
            <Button size="small"> <DeleteForeverOutlinedIcon fontSize="medium" sx={{ color: pink[500] }} /></Button>
          </Grid>
          <Grid item xs={2}>
            <Button size="small"> <EditNoteIcon fontSize="large" color="medium" /> </Button>

          </Grid>
          <Grid item xs={8}>
            <Typography textAlign='right'>Learn More..</Typography>
          </Grid>

        </Grid>


      </CardActions>
    </Card>

  )
}

export default NoteList
