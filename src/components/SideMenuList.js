import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import { Link, useLocation } from "react-router-dom";


const SideMenuList = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");

  return (
    <React.Fragment>
      
      <Link to="/" className={`text-white td-none link-item ${pathname === 'home' ? 'active-link' : ""}`}>

        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>



      <Link to="/notes" className={`text-white td-none link-item ${pathname === 'notes' ? 'active-link' : ""}`}>

        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItemButton>
      </Link>
      <Link to="/add" className={`text-white td-none link-item ${pathname === 'add' ? 'active-link' : ""}`}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Add" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  )

};

export default SideMenuList