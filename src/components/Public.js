// import { Link } from "react-router-dom";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMobileScreen
} from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import Header from './Header';
import Carousel from './Carousel';
import AboutUs from './AboutUs';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Reviews from './Reviews';
import Footer from './Footer';





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
        {/* Carousel */}
        {/* <Carousel  /> */}
        <AboutUs />
        <Reviews />
        <Section3 />
        <Footer />


        </div>
    )
  return content
}

export default Public
