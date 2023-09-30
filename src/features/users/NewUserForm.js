import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, CssBaseline, MenuItem, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';


const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const NewUserForm = () => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Manager"])
    const [image, setImage] = useState('')

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setPassword('')
            setRoles([])
            navigate('/dash/users')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }


    // convert image src from buffer to base4
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    //   handel image file to upload 
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        // console.log(base64)
        setImage(base64)
    }
    const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading

    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            console.log(roles)
            await addNewUser({ username, password, roles, image })
        }
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <MenuItem
                key={role}
                value={role}

            > {role}</MenuItem >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
            {/* <p className={errClass}>{error?.data?.message}</p> */}
            <Container maxWidth="xs">
            <CssBaseline />
                <Box 
                sx={{
                    marginTop:9,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'column'
                }}
                >

                <Box component='form' onSubmit={onSaveUserClicked}>
                        <Typography variant="h3" >New User</Typography >
                   
                        <TextField
                            id="username"
                            name="username"
                            label="UserName"
                            type="text"
                            autoComplete="off"
                            value={username}
                            onChange={onUsernameChanged}
                            sx={{
                                width:'45%',
                                margin:'5px'

                            }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onPasswordChanged}
                            sx={{
                                width:'45%',
                                margin:'5px'

                            }}
                        />
                    
                        <TextField
                            type="file"
                            id="image"
                            // label=""
                            name="image"
                            accept='image/*'
                            onChange={(e) => handleFileUpload(e)}
                            required
                            sx={{
                                width:'45%',
                                margin:'5px'

                            }}
                        />
         
                    <TextField
                                margin="normal"
                                id="username"
                                select
                                label="Select"
                                value={roles}
                                onChange={onRolesChanged}
                                sx={{
                                    width:'45%',
                                    margin:'5px',
                                    marginBottom:10
    
                                }}
                            >
                                {options}
                            </TextField>
                            <Button
                            component="button"
                                variant="contained"
                                label="Save"
                                disabled={!canSave}
                                sx={{
                                    padding:'15px',
                                    display:'block',
                                    margin:'auto',
                                    width:'95%'
                                }}
                            >
                                <FontAwesomeIcon icon={faSave} />
                            </Button>



                </Box>
                </Box>

            </Container>
        </>
    )

    return content
}
export default NewUserForm