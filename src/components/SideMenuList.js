import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation } from "react-router-dom";


const SideMenuList = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");

  return (
    <React.Fragment>
      
      <Link to="/" className={`text-white td-none link-item ${pathname === 'home' ? 'active-link' : ""}`}>

        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>



      <Link to="/notes" className={`text-white td-none link-item ${pathname === 'notes' ? 'active-link' : ""}`}>

        <ListItemButton>
          <ListItemIcon>
            <EditNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItemButton>
      </Link>
      <Link to="/add" className={`text-white td-none link-item ${pathname === 'add' ? 'active-link' : ""}`}>
        <ListItemButton>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  )

};

export default SideMenuList