import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import video from './imgs/computersite.mp4'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
    box:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        background:'#cdebf3',
        marginTop:'50px'
    },
    video: {
        width:'100%',
        height:'550px',
        borderRadius:'20px',
        background:'#000000',
        marginTop:'50px'
    },
    title1:{
        marginTop:'50px',
        fontWeight:'400'

    },
    title2:{
        fontWeight:'700',

    }
}))
const Section3 = () => {

    const classes = useStyles();
    const content =(
        <Grid className={classes.box} item xs={12}  sm={12}>
            <Typography className={classes.title1} variant='h6'>
                Our Portfolio
            </Typography>
            <Typography className={classes.title2} variant='h1'>
                Some Of Our Works
            </Typography>
            <Grid item xs={12} sm={6} >
        <video className={classes.video}  controls >

        <source src={video} type="video/mp4"/>
        </video>
            </Grid>
        </Grid>
    )
  return content
}

export default Section3
