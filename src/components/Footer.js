import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Grid,Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight,faPhone} from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(() => ({
    body:{
        display:'flex',
        flexDirection:'row',
        background:'#cdebf3',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap',
        paddingTop:'100px',
    }
}))

const Footer = () => {
    const classes = useStyles();
    const d = new Date().getFullYear();

    const content =(
        // <Grid container item xs={12} sm={12} >
            
            <Box className={classes.body}>
                <Typography variant='h6'>
                <FontAwesomeIcon icon={faPhone} size="xs" style={{color: "#3f767f",}} />
                (+0023 -433-265-0281 Onthur technot@support.com)
                </Typography>
                <Typography variant='h6'>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" style={{color: "#3f767f",}} />
                All rights reserved to TechNote &#169; 2017 - {d}	
                </Typography>
            </Box>
        // </Grid>
    )
  return content
}

export default Footer
