import React from 'react'
import { Grid,Typography,Link } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowRight,
    
 } from '@fortawesome/free-solid-svg-icons'

const ServicesItem = ({item}) => {
    const {icon,title,text} = item;
  return (
    <Grid item xs={12} sm={4}>
         <Typography variant='h4'>
         <FontAwesomeIcon icon={icon} size="xl" style={{color: "#3f767f",}} />
                {title}
            </Typography>
                <Typography variant='h6'>
                    {text}
                </Typography>
                <Link href='#'>
                Discover More <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#03767f",}} />
                </Link>
    </Grid>
  )
}

export default ServicesItem
