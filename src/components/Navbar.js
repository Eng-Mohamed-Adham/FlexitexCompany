import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Link} from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faGear} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles(() => ({
      
      menuButton: {
          color:'#1e72bd !important',
          underline:'none' | 'hover',
          padding:'10px',
          textDecoration:'none !important ',
          


          '&:hover': {
              underline:'none',
              textDecoration:'none',
              textUnderLineOffset:'unset',
              color:'#fff !important',
              background:'#1e72bd',
              borderRadius:'6px',
              
          }
      },
      loginbtn : {
          background:"#1e72bd",
          color:'#fff !important' ,
          padding:'10px',
          borderRadius:'6px',
          '&:hover': {
              textDecoration:'none',
              color:'#1e72bd !important',
              background:'#fff',
              border:'1px solid #1e72bd',
          
              
          }
  
  
      },


}));
const pages = ['Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar
  
    position="static" 
    sx={{background:'#fff !important',color:'#1e72bd !importnat',
    display:'grid',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    gridTemplateColumns: 'auto auto',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: '#1e72bd !important',
              textDecoration: 'none',
            }}
          >
             <Typography variant='h6'>
            <FontAwesomeIcon icon={faGear} size="xl" style={{color: "#1e72bd",}} />
            </Typography>
            Golden Tech Associates
          </Typography>

          
         
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: '#1e72bd !important',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
          <Typography variant='h6'>
          <FontAwesomeIcon icon={faGear} size="xl" style={{color: "#1e72bd",}} />
          Golden Tech 

            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            

              <Button
                onClick={handleCloseNavMenu}
             

              >
                
             <Link  className={`${classes.menuButton} ${classes.loginbtn} `} href='/login' >Login</Link>
                    </Button>
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },margin:'auto' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2,
                  display: 'block',
                  color:'#1e72bd !important',
                  }}

              >
                
 <Link  className={`${classes.menuButton} ${classes.loginbtn} `} href='/login' >Login</Link>
                    </Button>
            
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
