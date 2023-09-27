import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faHouse, faLaptopMedical, faNoteSticky, faNotesMedical, faUser, faUserPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





export const mainListItems = (
  <React.Fragment>
    <Link to="/dash">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faHouse} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/notes">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faNoteSticky} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/notes/new">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faNotesMedical} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Add Order" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/parts">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faAtom} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Parts" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/clients">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUser} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/clients/new">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUserPlus} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Add Client" />
    </ListItemButton>
    </Link>

  
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <Link className="link" to="/dash/parts/new">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faLaptopMedical} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Add Part" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/users">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUserTie} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    </Link>
    <Link className="link" to="/dash/users/new">
    <ListItemButton>
      <ListItemIcon>
      <FontAwesomeIcon icon={faUserPlus} style={{color: "#1e72bd",}} />
      </ListItemIcon>
      <ListItemText primary="Add User" />
    </ListItemButton>
    </Link>
  
  </React.Fragment>
);

