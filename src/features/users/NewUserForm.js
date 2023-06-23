import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, CssBaseline, MenuItem } from "@mui/material"
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
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
            {/* <p className={errClass}>{error?.data?.message}</p> */}
            <CssBaseline />
            <Container maxWidth="sm">
                <form className="form" onSubmit={onSaveUserClicked}>
                    <div className="form__title-row">
                        <h2>New User</h2>
                        <div className="form__action-buttons">
                            <button
                                className="icon-button"
                                title="Save"
                                disabled={!canSave}
                            >
                                <FontAwesomeIcon icon={faSave} />
                            </button>
                        </div>
                    </div>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="username"
                            name="username"
                            label="UserName"
                            type="text"
                            autoComplete="off"
                            value={username}
                            onChange={onUsernameChanged}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onPasswordChanged}
                        />
                    </Box>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            type="file"
                            id="image"
                            // label=""
                            name="image"
                            accept='image/*'
                            onChange={(e) => handleFileUpload(e)}
                            required
                        />
                        {/* <TextField
                            id="username"
                            select
                            label="Select"
                            sx={{ marginBottom: 10 }}
                            // value={roles[1]}
                            onChange={onRolesChanged}
                            multiple
                        >
                            {Object.values(ROLES).map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </TextField> */}
                    <select
                    id="roles"
                    name="roles"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={roles}
                    onChange={onRolesChanged}
                        >
                        {options}
                    </select>
                    </Box>



                </form>
            </Container>
        </>
    )

    return content
}
export default NewUserForm