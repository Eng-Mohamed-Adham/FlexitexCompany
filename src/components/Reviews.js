import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography,Rating,Grid,Card,CardMedia,CardContent,Box } from '@mui/material'
import img1 from './imgs/carousel-img2.jpg'

const useStyles = makeStyles(() => ({
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'50px',
        flexGrow:1
    },
    img:{
        width:'60px !important',
        height:'60px !important',
        borderRadius:'50%',

    },
    name:{
        fontWeight:'bold'
    },
    title:{
        fontWeight:'400',
        color:'#777',
        fontSize:'15px!important'
    }
}))
const Reviews = () => {

    const classes = useStyles();
    const [value,setValue] = React.useState(5);

    const content =(
        <Box className={classes.content} >
            <Typography variant='h3'>
                We Have Many Good Client's Reviews
            </Typography>
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={6} sm={3}>
                <Card className={classes.content} sx={{ maxWidth: 345,        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}}>
                            <CardMedia
                                className={classes.img}
                                component="img"
                                alt="green iguana"
                                image={img1}
                            />
                            <CardContent 
                            className={classes.content}
                            sx={{marginTop:'0px!important' }}

                            >
                                <Typography className={classes.name} gutterBottom variant="h5" >
                                Lizard
                                </Typography>
                                <Typography className={classes.title} gutterBottom variant="h5" >
                                Co-Founder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                  component="legend"
                                />
                            </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Card className={classes.content} sx={{ maxWidth: 345,        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}}>
                            <CardMedia
                                className={classes.img}
                                component="img"
                                alt="green iguana"
                                image={img1}
                            />
                            <CardContent 
                            className={classes.content}
                            sx={{marginTop:'0px!important' }}

                            >
                                <Typography className={classes.name} gutterBottom variant="h5" >
                                Lizard
                                </Typography>
                                <Typography className={classes.title} gutterBottom variant="h5" >
                                Co-Founder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                  component="legend"
                                />
                            </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Card className={classes.content} sx={{ maxWidth: 345,        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}}>
                            <CardMedia
                                className={classes.img}
                                component="img"
                                alt="green iguana"
                                image={img1}
                            />
                            <CardContent 
                            className={classes.content}
                            sx={{marginTop:'0px!important' }}

                            >
                                <Typography className={classes.name} gutterBottom variant="h5" >
                                Lizard
                                </Typography>
                                <Typography className={classes.title} gutterBottom variant="h5" >
                                Co-Founder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                  component="legend"
                                />
                            </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Card className={classes.content} sx={{ maxWidth: 345,        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}}>
                            <CardMedia
                                className={classes.img}
                                component="img"
                                alt="green iguana"
                                image={img1}
                            />
                            <CardContent 
                            className={classes.content}
                            sx={{marginTop:'0px!important' }}

                            >
                                <Typography className={classes.name} gutterBottom variant="h5" >
                                Lizard
                                </Typography>
                                <Typography className={classes.title} gutterBottom variant="h5" >
                                Co-Founder
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                  component="legend"
                                />
                            </CardContent>
                </Card>
            </Grid>
            </Grid>

        </Box>
    )
  return content 
}

export default Reviews
