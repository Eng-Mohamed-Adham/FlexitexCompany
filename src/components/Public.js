// import { Link } from "react-router-dom";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Header from './Header';
import AboutUs from './AboutUs';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Reviews from './Reviews';
import Footer from './Footer';
import Services from './Services';





const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,



    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
 
   
 
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
    },
    card: {
        maxWidth:250,
        display:'inline-block',
        marginRight:30
    },
    box: {
        background:'#fff',
        borderRadius:'20px',
        width:'750px',
        height:'801px',
        marginTop:'50px',

    }
  }));


const Public = () => {
    const classes = useStyles();


    const content = (

    <div className={classes.root}>

        <Grid container spacing={0}  >
        <Navbar />
        </Grid>
        <Section1 />
        <Section2 />
        <Header />
        <AboutUs />
        <Services />
        <Section3 />
        <Reviews />
        <Footer />


        </div>
    )
  return content
}

export default Public
