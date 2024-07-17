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
      <ListItemButton>
        <Link to="/" className={`text-white flex justify-center align-center link-item ${pathname === 'home' ? 'active-link' : ""}`}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/notes" className={`text-white flex justify-center align-center link-item ${pathname === 'notes' ? 'active-link' : ""}`}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/add" className={`text-white flex justify-center align-center link-item ${pathname === 'add' ? 'active-link' : ""}`}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Add" />
        </Link>
      </ListItemButton>
    </React.Fragment>
  )

};

export default SideMenuList