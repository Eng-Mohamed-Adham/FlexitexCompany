import React, {Suspense,lazy} from 'react'
import { Grid,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faLaptop,
    faArrowRight,
    faTabletScreenButton,
    faRobot,
    faMoneyBill,
    faShop,
    faRepeat
 } from '@fortawesome/free-solid-svg-icons'


import { Link } from '@mui/material'


const useStyles = makeStyles(() => ({
    box:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        // background:'#cdebf3',
        marginTop:'50px'
    },
    title1:{
        marginTop:'50px',
        fontWeight:'400',


    },
    title2:{
        fontWeight:'700',
        marginBottom:'30px'

    },
    section:{
        padding:'20px'
    },
    title3:{
        marginLeft:'10px',
        fontWeight:400,
        
    },
    p:{
        fontSize:'20px',
        marginLeft:'58px',
        fontWeight:'lighter',
        color:"#404040"

    },
    link:{
        marginLeft:'60px !important',
        color:'#03767f !important'

    }
}))

const items =[
    {id:1,   
        icon:faLaptop,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
    {id:2,
        icon:faTabletScreenButton,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
    {id:3,
        icon:faRobot,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
    {id:4,
        icon:faMoneyBill,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
    {id:5,
        icon:faShop,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
    {id:6,
        icon:faRepeat,
        title:'LabTop maintenance',
        text:'Non amet tempor amet ipsum officia ullamco deserunt eiusmod laboris laboris. Ad deserunt eiusmod ut cupidatat aliquip nisi nostrud.',
    },
]


const Services = () => {
    

const classes = useStyles();
const content =(
    <Grid className={classes.box} item xs={12}  sm={12}>
            <Typography className={classes.title1} variant='h6'>
                Our Featured Services
            </Typography>
            <Typography className={classes.title2} variant='h3'>
                We Provide All Exclusive Services For Client's
            </Typography>
            <Grid  container >
            {
                items.map(item => {
                    return (
                        <Grid className={classes.section} key={item.id} item xs={12} sm={4} >
                        <Typography className={classes.title3} variant='h4'>
                        <FontAwesomeIcon icon={item.icon} size="xl" style={{color: "#3f767f",}} />
                                {item.title}
                            </Typography>
                                <Typography className={classes.p} variant='h6'>
                                    {item.text}
                                </Typography>
                                <Link className={classes.link} href='#'>
                                Discover More <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#03767f",}} />
                            </Link>
                        </Grid>
                    )
                })
            }
            </Grid>
            </Grid>
)
    return content
}

export default Services
