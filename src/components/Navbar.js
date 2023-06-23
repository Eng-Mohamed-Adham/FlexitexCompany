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
          color:'#3f767f !important',
          underline:'none' | 'hover',
          padding:'10px',
          textDecoration:'none !important ',


          '&:hover': {
              underline:'none',
              textDecoration:'none',
              textUnderLineOffset:'unset',
              color:'#fff !important',
              background:'#3f767f',
              borderRadius:'6px',
              
          }
      },
      loginbtn : {
          background:"#3f767f",
          color:'#fff !important' ,
          padding:'10px',
          borderRadius:'6px',
          '&:hover': {
              textDecoration:'none',
              color:'#3f767f !important',
              background:'#fff',
              border:'1px solid #3f767f',
          
              
          }
  
  
      },


}));
const pages = ['Company', 'Services', 'AboutUs','Login'];
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

  let button = (page) => {
    let content;
   
        if(page === 'Login'){
         content = <Link  className={`${classes.menuButton} ${classes.loginbtn} `} href={`/${page}`} >{page}</Link>
      }else{
       content = <Link  className={`${classes.menuButton} `} href={`/${page}`} >{page}</Link>
      }
    return content

}

  return (
    <AppBar position="static" sx={{background:'#fff !important',color:'#3f767f !importnat'}}>
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
              letterSpacing: '.3rem',
              color: '#3f767f !important',
              textDecoration: 'none',
            }}
          >
             <Typography variant='h6'>
            <FontAwesomeIcon icon={faGear} size="xl" style={{color: "#3f767f",}} />
            </Typography>
            Sowftix Technology
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#3f767f !important"
            >
              <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#3f767f",}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{color:'#3f767f !important'}}>
                  {button(page)}

                </MenuItem>
              ))}
            </Menu>
          </Box>
         
         
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
              letterSpacing: '.3rem',
              color: '#3f767f !important',
              textDecoration: 'none',
            }}
          >
             <Typography variant='h6'>
            <FontAwesomeIcon icon={faGear} size="xl" style={{color: "#3f767f",}} />
            </Typography>
            Sowftix Technology
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2,
                  display: 'block',
                  color:'#3f767f !important',
                  }}

              >
                
                {button(page)}
              </Button>
            ))}
            
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
