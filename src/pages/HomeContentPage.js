import React from 'react'

import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const HomeContentPage = () => {

  const location = useLocation();
  let pathname = location.pathname.replace("/", "");


  return (
    <div>
      <Typography variant="h4" > Note List App</Typography>
      <Divider sx={{ marginBottom: 3 }}></Divider>
     
      <Link to="/notes" className={`text-white td-none link-item ${pathname === 'notes' ? 'active-link' : ""}`}>
        <ListItemButton>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Show Note List ..." />
        </ListItemButton>
      </Link>
      <Link to="/add" className={`text-white td-none link-item ${pathname === 'add' ? 'active-link' : ""}`}>
        <ListItemButton>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Add New Note ..." />
        </ListItemButton>
      </Link>
      
    </div>
  )
}

export default HomeContentPage





