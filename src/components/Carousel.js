

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";
import img1 from './imgs/carousel-img1.webp'
import { makeStyles } from '@material-ui/core/styles';
import img2 from './imgs/carousel-img2.jpg'
import img3 from './imgs/carousel-img1.avif' 
import img4 from './imgs/carousel-img4.avif'
import img5 from './imgs/carousel-img5.jpg'
import img6 from './imgs/carousel-img6.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    main:{
        position:'relative'
    },
    img: {
        width:'inherit',
        height:'450px',
        borderRadius:'10px',
        zIndex:1
    },
    slide: {
        width:'90% !important',
        margin:'20px',

    },
    frame:{
        background:'#fff',
        opacity:'100%',
        border:'3px solid #000',
        width:'350px',
        position:'absolute',
        height:'470px',
        left:'37.5%',
        top:'10px',
        borderRadius:'10px',
        zIndex:2

    },
    avatar:{
        display:'flex !important',

    }
}));

const Carousel = () => {
    const classes = useStyles();

    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
      };
    return (
        <div className={`${classes.main} carousel-wrapper`}>
            <div className={classes.frame}>
            <Stack className={classes.avatar} direction="row" spacing={1}>
                <Chip avatar={<Avatar alt="Ahmed" src={img4}/>} label="Suggestion this company for your works" />
                <Chip
                    avatar={<Avatar alt="Natacha" src={img3} />}
                    label="Great attention given by this company"
                />
            </Stack>

            <FontAwesomeIcon label='go' icon={faHeart} beat size="2xl" style={{color: "#3f767f",}} />

            </div>
            
        <Slider {...settings}>
            <div className={`${classes.slide} carousel-slide`}>
              <img className={classes.img} src={img1} alt="." />
            </div>
            <div className={`${classes.slide} carousel-slide`}>
            <img className={classes.img} src={img2} alt="." />
            </div>
            <div className={`${classes.slide} carousel-slide`}>
            <img className={classes.img} src={img3} alt="." />
            </div>
            <div className={`${classes.slide} carousel-slide`}>
            <img className={classes.img} src={img4} alt="." />
            </div>
            <div className={`${classes.slide} carousel-slide`}>
            <img className={classes.img} src={img5} alt="." />
            </div>
            <div className={`${classes.slide} carousel-slide`}>
            <img className={classes.img} src={img6} alt="." />
            </div>
          </Slider>
        </div>
      );
}

export default Carousel


