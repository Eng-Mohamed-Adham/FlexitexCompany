import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { useLoginMutation } from '../features/auth/authApiSlice'

import usePersist from '../hooks/usePersist'
import { Typography,Box, TextField, Button } from '@mui/material';

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'fit-content',
            background:'#1e73be',
            // transform:"translate(50%,50%)"
            margin:'auto',
            borderRadius:'20px',
            color:'#fff'
        }}
        >
                 <Typography
                 sx={{
                    margin:'20px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    background:'#1e73be',

                 }} variant="h3" gutterBottom>
                     Login
                </Typography>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'auto',
                    padding:'20px',
                    gap:'20px',

                }}
                >
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form
                    style={{
                    display:'grid',
                    // flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'auto',
                    padding:'20px',
                    gap:'20px',
                    gridTemplateColumns:'auto auto'
                    }}

                    onSubmit={handleSubmit}
                >
                    <TextField
                        label='Username'
                        type="text"
                        id="username"
                        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                        sx={{
                            background:'#fff',
                        }}
                    />

                    <TextField
                        label='Password'
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                        sx={{
                            background:'#fff',
                        }}
                    />
                    <button
                    style={{
                        color:'#1e73be',
                        background:'#fff',
                        padding:'15px',
                        borderRadius:'15px',
                        "&:hover":{
                            color:'#1e73be',
                            background:'#fff',
                        }
                    }} 
                        >Sign In</button>


                    <label htmlFor="persist" >
                        <TextField
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                        />
                        Trust This Device
                    </label>
                </form>
            </Box>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </Box>
    )

    return content
}
export default Login