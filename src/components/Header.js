import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TypeAnimation } from 'react-type-animation';


const useStyles = makeStyles((theme) => ({
    header : {
        display:'flex',
        marginTop:'10px',
        padding:'10px',
        fontSize:'xx-large',
        justifyContent:'center',
        alignItems:'center',
        color:'#000',
        fontWeight:'bolder',
        background:'#cdebf3 !important'


    },
}));

const Header = () => {
const classes = useStyles();

   
    const content = (
        <Grid item xs={12} sm={12} >
        <Typography 
        variant='h4'
        className={classes.header}
        >

        <TypeAnimation
            sequence={[
                'tech.Note.', // Types 'One'
                3000, // Waits 3s
                'Company', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
            />
            {/* tech.Note.Company */}
        </Typography>
    </Grid>

    )
    return content
}
 
export default Header;