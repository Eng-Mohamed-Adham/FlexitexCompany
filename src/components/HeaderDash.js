import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faHouse, faLaptopMedical, faNoteSticky, faNotesMedical, faUser, faUserPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, List, ListItem, ListItemButton, Menu } from '@mui/material';
import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function HeaderDash() {
    const {isManager, isAdmin} = useAuth()

    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Box>
    
    <Paper 
    sx={
        { 
            width: 240,
             maxWidth: '100%',
             display:{xs:'none',sm:'none',md:'block'},
             height:'100vh',
             background:'#1e72bd',
             boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
              }}>
      <MenuList  >
      <List sx={{ color:'#fff !important'}}>
    

          <Link className="link" to="/dash/notes">
          <ListItem disablePadding>
            <ListItemButton sx={{marginLeft:'30px'}}>
              <ListItemIcon
                sx={{
                  marginRight:'-30px',
                  marginBottom:'10px'
                }}
                >
                  <FontAwesomeIcon icon={faNoteSticky} style={{color: "#fff",}} />

                </ListItemIcon>
              <ListItemText>
                Notes
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link className="link" to="/dash/notes/new">
          <ListItem disablePadding>
            <ListItemButton  sx={{marginLeft:'30px'}}>
              <ListItemIcon
              sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}
              >
              <FontAwesomeIcon icon={faNotesMedical} style={{color: "#fff",}} />
              </ListItemIcon>
              <ListItemText>
                Add New Notes
              </ListItemText>
            </ListItemButton>
          </ListItem>
            </Link>
            <Link className="link" to="/dash/parts">
          <ListItem disablePadding>
            <ListItemButton  sx={{marginLeft:'30px'}}>
              <ListItemIcon   sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                <FontAwesomeIcon icon={faAtom} style={{color: "#fff",}} />
              </ListItemIcon>
              <ListItemText>
                Parts
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        <Link className="link" to="/dash/clients">
        <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon  sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faUser} style={{color: "#fff",}} />

                  </ListItemIcon>
                  <ListItemText>
                    Clients
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/clients/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faUserPlus} style={{color: "#fff",}} />

                  </ListItemIcon>
                  <ListItemText>
                    Add New Client
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
        <Divider />
        <List>
          {(isManager || isAdmin) && (
            <>
            <Link className="link" to="/dash/parts/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faLaptopMedical} style={{color: "#fff",}} />
                  </ListItemIcon>
                  <ListItemText>
                    Add NewParts
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/users">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                <FontAwesomeIcon icon={faUserTie} style={{color: "#fff",}} />
              </ListItemIcon>
                  <ListItemText>
                    Users
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/users/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                marginRight:'-30px',
                marginBottom:'10px'
              }}>
                 <FontAwesomeIcon icon={faUserPlus} style={{color: "#fff",}} />
              </ListItemIcon>
                  <ListItemText>
                    Add New User
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              
        
            </>
          )}
        </List>
      </MenuList>
    </Paper>

    <IconButton
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        sx={{
            display:{xs:'block',sm:'block',md:'none'},
            margin:'20px',


        }}
            >
                <MenuIcon sx={{color:'#1e72bd'}}/>
            </IconButton>
        
        <Menu
            sx={{
              display:{xs:'block',md:'none'},
              width:'350px',
              
            }}
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
        <MenuItem
        sx={{
          background:'#1e72bd',
          display:'flex',
          flexWrap:'wrap',
          flexDirection:'column',
          border:0

        }}
        onClick={handleClose}

        >
        <Link className="link" to="/dash/notes">
          <ListItem disablePadding>
            <ListItemButton sx={{marginLeft:'30px'}}>
              <ListItemIcon
                sx={{
                  // marginRight:'-30px',
                  marginBottom:'10px'
                }}
                >
                  <FontAwesomeIcon icon={faNoteSticky} style={{color: "#fff",}} />

                </ListItemIcon>
              <ListItemText>
                Notes
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link className="link" to="/dash/notes/new">
          <ListItem disablePadding>
            <ListItemButton  sx={{marginLeft:'30px'}}>
              <ListItemIcon
              sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}
              >
              <FontAwesomeIcon icon={faNotesMedical} style={{color: "#fff",}} />
              </ListItemIcon>
              <ListItemText>
                Add New Notes
              </ListItemText>
            </ListItemButton>
          </ListItem>
            </Link>
            <Link className="link" to="/dash/parts">
          <ListItem disablePadding>
            <ListItemButton  sx={{marginLeft:'30px'}}>
              <ListItemIcon   sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                <FontAwesomeIcon icon={faAtom} style={{color: "#fff",}} />
              </ListItemIcon>
              <ListItemText>
                Parts
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
        
        <Link className="link" to="/dash/clients">
        <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon  sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faUser} style={{color: "#fff",}} />

                  </ListItemIcon>
                  <ListItemText>
                    Clients
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/clients/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faUserPlus} style={{color: "#fff",}} />

                  </ListItemIcon>
                  <ListItemText>
                    Add New Client
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
        <Divider />
        <List>
          {(isManager || isAdmin) && (
            <>
            <Link className="link" to="/dash/parts/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                  <FontAwesomeIcon icon={faLaptopMedical} style={{color: "#fff",}} />
                  </ListItemIcon>
                  <ListItemText>
                    Add NewParts
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/users">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                <FontAwesomeIcon icon={faUserTie} style={{color: "#fff",}} />
              </ListItemIcon>
                  <ListItemText>
                    Users
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              <Link className="link" to="/dash/users/new">
              <ListItem disablePadding>
                <ListItemButton sx={{marginLeft:'30px'}}>
                  <ListItemIcon sx={{
                // marginRight:'-30px',
                marginBottom:'10px'
              }}>
                 <FontAwesomeIcon icon={faUserPlus} style={{color: "#fff",}} />
              </ListItemIcon>
                  <ListItemText>
                    Add New User
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              </Link>
              
        
            </>
          )}
        </List>
        </MenuItem>

        </Menu>
    </Box>
  );
}