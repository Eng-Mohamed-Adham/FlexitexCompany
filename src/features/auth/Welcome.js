import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';

import SearchInput from "./dashboardComponents/searchInput";
import ChartLine from "./dashboardComponents/ChartLine";




const Welcome = () => {


  const { isManager, isAdmin,username } = useAuth();

  const date = new Date();

  const today = new Intl.DateTimeFormat("en-PS", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  return (
        <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
            alignItems:'center',
            wrap:'nowrap',
            width:'90%',
            margin:'10px',
            order:{xs:2,md:1},
            

        }}
        >
        <SearchInput />

        <Container
        className="welcome"
        sx={{
          marginTop:'30px',
          borderRadius:'10px',
          color:'#000 !important',
          height:'100%',
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'


        }}
          >
            <Typography
            variant="h5"
            sx={{
              color:'#FFF',
              borderRadius:'10px',
              display:'block',
              marginTop:'20px'
            }}
            >
              Hi,{username} you are in the Dashboard for Softix System.
            </Typography>
            <Typography
            variant="h6"
            sx={{
              color:'#fff',
              
            }}
            >
            {today}
            </Typography>
            
          </Container>
        <Box
          display='flex'
          direction='column'
          justifyContent='space-between'
          alignItems="flex-start" 
          
          
          sx={{
            flexWrap:{xs:'wrap',md:'nowrap'},
            background:'#fff',
            borderRadius:'20px',
            margin:{xs:'0',sm:'20px',md:'50px'},
            marginTop:{xs:'60px',md:'30px'},
            width:{xs:'100%',md:'100%'},
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',


          }} 
          

        >
        <Box sx={{
          display:'flex',
          flexGrow:1,
          width:{xs:'50%',md:'100%'},

        }}>
          {/* <BarChart /> */}
          <ChartLine />
        </Box>


        </Box>
        </Box>

  );
};

export default Welcome;
