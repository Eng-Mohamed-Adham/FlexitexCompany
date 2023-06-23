import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import { Box, Divider, Grid, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import { useSendLogoutMutation } from '../features/auth/authApiSlice'

import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/users/usersApiSlice'
import { useEffect, useState } from 'react'
import useData from '../hooks/useData'

import {
    faFileCirclePlus,
    faFilePen,
    faUserGear,
    faUserPlus,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons"

const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/


const DashFooter = () => {
    // const users = useSelector(selectAllUsers)

    const {username, status,isManager,isAdmin} = useAuth()
    const {users,notes,parts,clients} = useData()

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const onGoHomeClicked = () => navigate('/dash')
    
    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onNewNoteClicked = () => navigate('/dash/notes/new')
    const onNewUserClicked = () => navigate('/dash/users/new')
    const onNotesClicked = () => navigate('/dash/notes')
    const onUsersClicked = () => navigate('/dash/users')

    let dashClass = null
    if (!DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
        dashClass = "dash-header__container--small"
    }

    let newNoteButton= null
    if(NOTES_REGEX.test(pathname)){
         newNoteButton = (
            <button
            className='icon-button'
            title='New Note'
            onClick={onNewNoteClicked}>
                <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
        )

    }

  let newUserButton ;

  if(USERS_REGEX.test(pathname)){
    newUserButton = (
        <button
                className="icon-button"
                title="New User"
                onClick={onNewUserClicked}
            >
                <FontAwesomeIcon icon={faUserPlus} />
            </button>
    )
  }

  let userButton = null
  if (isManager || isAdmin) {
      if (!USERS_REGEX.test(pathname) && pathname.includes('/dash')) {
          userButton = (
              <button
                  className="icon-button"
                  title="Users"
                  onClick={onUsersClicked}
                  
              >
                  <FontAwesomeIcon icon={faUserGear} />
              </button>
          )
      }
  }

  let notesButton = null
  if (!NOTES_REGEX.test(pathname) && pathname.includes('/dash')) {
      notesButton = (
          <button
              className="icon-button"
              title="Notes"
              onClick={onNotesClicked}
          >
              <FontAwesomeIcon icon={faFilePen} />
          </button>
      )
  }


    const logoutButton = (
        <button
            className="icon-button"
            title="Logout"
            onClick={sendLogout}
        >
            <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
    )

    const matchUser = users.find(user => user.username === username)

    let countUsers
    if(users && clients){
        countUsers = users.length + clients.length
        
    }
    
    let goHomeButton = null
    if(pathname !== '/dash'){
        goHomeButton = (
            <button 
            title='Home'
            onClick={onGoHomeClicked}>
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }
    const content = (
        <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
            alignItems:'center',
            maxWidth:'450px !important',
            margin:'10px',
            order:{xs:1,md:2}
        }}
        >
            <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                background:'#fff',
                color:'#1e72bd',
                borderRadius:'10px',
                width:'60%',
                padding:'20px',
                justifyContent:'space-around',
                marginBottom:'-20px',
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'

            }} 
            >
            <button
            className='icon-button'
            title='Home'
            onClick={onGoHomeClicked}>
                <FontAwesomeIcon icon={faHouse} color='#2e72bd' />
            </button>
            {
                isManager?(
                    <button
                    className="icon-button"
                    title="New User"
                    onClick={onNewUserClicked}
                >
                    <FontAwesomeIcon icon={faUserPlus} color='#2e72bd' />
                </button>
                ):''
            }
           
            <button
            className='icon-button'
            title='New Note'
            onClick={onNewNoteClicked}>
                <FontAwesomeIcon icon={faFileCirclePlus} color='#2e72bd' />
            </button>

            <button
            className="icon-button"
            title="Logout"
            onClick={sendLogout}
            >
            <FontAwesomeIcon icon={faRightFromBracket} color='#2e72bd' />
            </button>

            </Box>

        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            my={5}
            sx={{
                maxwidth:'450px',
                background:'#FFF',
                borderRadius:'10px' ,
                // height:'100vh',
                marginRight:{xs:'0',sm:'0px',md:'20px'},
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'

            }}

        >

            <Box 
            sx={{
                display:'flex',
                flexDirection:'column',
                // flexGrow:1,
                justifyContent:'flex-start',
                alignItems:'center',
                alignContent:'center',
                width:'100%',
                marginTop:'20px'
            }}
            >
                <img
                src={matchUser?matchUser.image:''} 
                alt={username}
                style={{
                    width:'160px',
                    height:'160px',
                    borderRadius:'20px',
                    margin:'0',

                }}
                />
                <Typography
                variant='h5'
                sx={{
                    color:'#1e72bd',
                    marginTop:'10px',
                    fontWeight:500,


                }}
                >
                    User: {username} 
                </Typography>

            <Typography
                variant='h6'
                sx={{
                    color:'#5b5b5b',
                    marginTop:'7px',
                    fontSize:'14px'
                    
                }}
                >
                    UserStatus: {status} 
                </Typography>

            </Box>
            <Divider />
            <Box
            sx={{
                width:'80%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                marginTop:'50px',

            }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        marginLeft:'20px',
                        fontSize:'14px',
                        color:'#1e72bd',
                        fontWeight:600,

                    }}
                >
                    {countUsers} People in System

                </Typography>
            <LinearProgress
            sx={{
                width:'100%',
                height:'10px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:'20px',
                borderRadius:'20px',
                // marginLeft:'20px',
                
            }}
            variant="determinate" 
            value={countUsers} 
            />

            </Box>
            <Box sx={{ width: '100%' }}>
            <Grid 
            container
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-around"
            alignItems="space-around"
            sx={{
                marginBottom:'50px',
                marginTop:'30px',
            }}
            >
                <Grid
                item xs={6}
              
                >
                    <Typography
                        variant='h6'
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItem:'center',
                            marginRight:'25px',
                            color:'#1b64a7',

                        }}
                    >
                        {users.length}
                        
                    </Typography>
                    <Typography
                        sx={{
                        
                            marginLeft:'25px',
                            color:'#1e72bd',
                            fontWeight:500,
                            fontSize:'13px'
                        }} 
                    >
                    Total Users
                    </Typography>
                </Grid>

                <Grid 
                item xs={6}
             
                >
                    <Typography
                        variant='h6'
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItem:'center',
                            marginRight:'25px',
                            color:'#1b64a7',

                        }}
                    >
                        {notes.length}
                        
                    </Typography>
                    <Typography
                           sx={{
                        
                            marginLeft:'25px',
                            color:'#1e72bd',
                            fontWeight:500,
                            fontSize:'13px'
                        }} 
                    >
                    Total Notes
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography
                        variant='h6'
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItem:'center',
                            marginRight:'25px',                
                            color:'#1b64a7',

                        }}
                    >
                        {clients.length}
                        
                    </Typography>
                    <Typography
                           sx={{
                        
                            marginLeft:'25px',
                            color:'#1e72bd',
                            fontWeight:500,
                            fontSize:'13px'
                        }} 
                    >
                    Total Clients
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography
                        variant='h6'
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItem:'center',
                            marginRight:'25px',
                            color:'#1b64a7',

                        }}
                    >
                        {parts.length}
                        
                    </Typography>
                    <Typography 
                           sx={{
                        
                            marginLeft:'25px',
                            color:'#1e72bd',
                            fontWeight:500,
                            fontSize:'13px'
                        }} 
                    >
                    Total Parts
                    </Typography>
                </Grid>
            </Grid>
            </Box>
        </Grid>
    </Box>
    )

  return content
}

export default DashFooter
