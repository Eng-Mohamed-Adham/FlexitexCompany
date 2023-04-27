import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import img1 from './imgs/carousel-img1.avif'
import img2 from './imgs/carousel-img5.jpg'
import img3 from './imgs/carousel-img1.webp'


const useStyle = makeStyles(() => ({
    root:{
        background:'#cdebf3',
        // marginTop:'50px',
        paddingTop:'50px',
        paddingBottom:'30px'
    },
    about: {
        marginTop:'50px',
        marginBottom:'30px',



    },
    title:{
        fontSize: '20px',
        fontStyle: 'revert',
        fontWeight: 600,
        marginBottom: 'revert',
        letterSpacing: '1.4px',
        marginLeft: '10px'

    },
    btn:{
        marginLeft:'10px !important',
        background:'#3f767f !important',
        color:"#FFF !important",
        "&:hover":{
            color:'#3f767f !important',
            background:"#FFF !important",
            border:'2px solid #3f767f'
        }



    },
    imges :{
    },
    img1:{
        width:'180px',
        height:'250px',
        borderRadius:'45px',
        // margin:'10px',
        marginBottom:'40px'

    },
    img2:{
        width:'160px',
        height:'250px',
        borderRadius:'45px',
        margin:'10px',
        marginBottom:'15px'
    },
    img3:{
        width:'140px',
        height:'250px',
        borderRadius:'45px',
        margin:'10px',
        marginBottom:'50px'
    }
}))
const AboutUs = () => {
    const classes = useStyle();

    const content = (
        <Box className={classes.root} sx={{ width: '100%' }}>
            <Grid  container spacing={0} >
            <Grid className={classes.about} item xs={12} sm={6} >
                <Typography className={classes.title} variant="h4">
                    Dolore ea aliqua aliquip exercitation. Occaecat ut aute reprehenderit est laborum tempor dolor occaecat veniam id sit labore exercitation.
                </Typography>
                <Button className={classes.btn} variant="contained">Contained</Button>

            </Grid >
            <Grid className={classes.imges} item xs={12} sm={6}>
                <img className={classes.img1} src={img1} alt="1" />
                <img className={classes.img2} src={img2} alt="2" />
                <img className={classes.img3} src={img3} alt="3" />
                <Typography variant="h6">Occaecat et ullamco velit occaecat labore proident magna consequat.</Typography>
            </Grid>
        </Grid>
        </Box>
        
    )
    return content
}
 
export default AboutUs;