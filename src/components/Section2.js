import React from 'react'
import { makeStyles } from '@material-ui/core'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopMedical,faGaugeHigh,faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
    box: {
        width:'200px',
        height:'200px',
        background:'#FFF !important',
        color:'#3f767f !important',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        // marginLeft:'10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

        '@media (max-width:998px)':{
            marginLeft:'5px !important',
            width:'90%'

        },
        '@media (max-width: 780px)': {
            width: '80%',
            marginLeft:'17px !important',
            marginTop:'60px !important'
          }

    },
    icon:{
        fontSize:'20px !impotant',
        marginBottom:'50px',
        textAlign:'center',
        display:'block'
    }

}))
const Section2 = () => {

const classes = useStyles();



    const content = (
        <Box sx={{ flexGrow: 1,marginBottom:'50px',background:'#fff !important', }}>
        <Grid  container spacing={0} columns={12}>
          <Grid sx={{zIndex:'9 !important',display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'center'}} item xs={6} sm={3}>
            <Box className={classes.box}>

            <Typography variant='h6'>
            <FontAwesomeIcon className={classes.icon} icon={faLaptopMedical} size="2xl" style={{color: "#3f767f",}} />
            </Typography>
            <Typography variant='h5'>
                electronic
            </Typography>
            </Box>
          </Grid>
          <Grid sx={{zIndex:'9 !important'}} item xs={6} sm={3}>
               <Box className={classes.box}>

            <Typography variant='h6'>
            <FontAwesomeIcon className={classes.icon} icon={faGaugeHigh} size="2xl" style={{color: "#3f767f",}} />
            </Typography>
            <Typography variant='h5'>
           
            High Quality
            </Typography>
            </Box>
          </Grid>
          <Grid sx={{zIndex:'9 !important'}} item xs={6} sm={3}>
               <Box className={classes.box}>

            <Typography variant='h6'>
            <FontAwesomeIcon className={classes.icon} icon={faTruck} size="2xl" style={{color: "#3f767f",}} />
            </Typography>
            <Typography variant='h5'>
           
            Fast Delivery
            </Typography>
            </Box>
          </Grid>
          <Grid sx={{zIndex:'9 !important'}} item xs={6} sm={3}>
               <Box className={classes.box}>

            <Typography variant='h6'>
            <FontAwesomeIcon className={classes.icon} icon={faHeadset} size="2xl" style={{color: "#3f767f",}} />
            </Typography>
            <Typography variant='h5'>
           
            27/7 Support
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  return content
}

export default Section2
