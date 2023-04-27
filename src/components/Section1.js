import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';


const useStyles = makeStyles(() => ({
    curved:{
        position: 'relative',
        background: '#3f767f',
        height: '50vh',
        borderBottomLeftRadius: '50% 20%',
        borderBottomRightRadius: '50% 20%',
        display:'flex-block',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'30px'
    },
    title:{
        margin:0,
        padding:0,
        textAlign:'center',
        color:'#fff !important',
        paddingTop:'20px',
        paddingBottom:'60px',
        fontWeight:'bolder',
        fontFamily:'sans',
    },
     p:{
        margin:0,
        padding:0,
        textAlign:'center',
        color:'#000 !important',
        paddingTop:'20px',
        paddingBottom:'60px',
        fontSize:'30px',
        marginBottom:'30px'
     },
     btn:{
        margin:0,
        padding:0,
        textAlign:'center',
        color:'#3f767f !important',
        background:'#FFF !important',
        position:'absolute',
        top:'-10%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        "&:hover":{
            background:'#3f767f !important',
            color:'#FFF !important',
            borderRadius:'10px',
            border:'2px solid #3f767f'
         }
     }
}))


const Section1 = () => {
const classes = useStyles();


const content =(
    <section className={classes.curved}>
        <Typography className={classes.title} variant='h4'>
            Discover Our Team & Services
        </Typography>
        <Typography className={classes.p} variant='h6'>
            Consectetur magna culpa duis aliqua irure cillum reprehenderit non velit.
        </Typography>
        <Button className={classes.btn} variant="contained">Get Started</Button>

    </section>
)
return content
}

export default Section1
