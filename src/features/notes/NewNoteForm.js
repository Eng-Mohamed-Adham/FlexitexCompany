import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewNoteMutation } from "./notesApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import TextField from '@mui/material/TextField';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


const NewNoteForm = ({ users, clients }) => {


    const [addNewNote, {
        isLoading,
        isSuccess,
        isError,
    }] = useAddNewNoteMutation()




    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [clientName, setClientName] = useState('')
    const [validClient, setValidClient] = useState(false)
    const [text, setText] = useState('')
    const [userId, setUserId] = useState(users[0].id)
    const [clientId, setClientId] = useState('')
    const [ismatch, setIsMatch] = useState(false)


    let AlertText

    const checkUsername = () => {
        const matchingClient = clients.find((client) => client.username === clientName);
        if (matchingClient) {
            setClientId(matchingClient._id)
            setValidClient(true)
            setIsMatch(true)

        } else {
            setIsMatch(false)

        }

    }

    useEffect(() => {
        if (isSuccess) {
            setTitle()
            setText('')
            setUserId('')
            navigate('/dash/notes')
        }

    }, [isSuccess, navigate, validClient])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)
    const onClientNameChanged = e => setClientName(e.target.value)


    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveNoteClicked = async (e) => {
        e.preventDefault()
        if (canSave) {

            await addNewNote({ user: userId, title, text, clientId })

        }
    }

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.username}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''
    const alerseverity = ismatch ? "success" : "error"
    const alertText = ismatch ? "This Client is Found" : "This Client is Not Found"
    const content = (
        <>
            <CssBaseline />
            <Container maxWidth="sm">


                <form className="form" onSubmit={onSaveNoteClicked}>
                    <div className="form__title-row">
                        <h2>New Note</h2>
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

                    {
                        <Alert severity={alerseverity}>{alertText}</Alert>
                    }
                    <label htmlFor="client">
                        Enter Client Name to add note for him:
                    </label>

                    <TextField
                        id="client"
                        label="Client Name"
                        autoComplete="off"
                        type="text"
                        variant="outlined"
                        value={clientName}
                        onChange={onClientNameChanged}
                    />
                    <Button variant="contained" onClick={checkUsername}>Check Client</Button>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        autoComplete="off"
                        >
                            
                            <TextField
                                id="title"
                                name="title"
                                label="Title"
                                type="text"
                                variant="outlined"
                                autoComplete="off"
                                value={title}
                                onChange={onTitleChanged}
                            />

                    
                        

                            <TextField
                                id="username"
                                select
                                label="Select"
                                sx={{marginBottom:10}}
                                value={userId}
                                onChange={onUserIdChanged}
                            >
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}>
                                        {user.username}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                    <label className="form__label" htmlFor="standard-multiline-static">
                        Text:</label>

                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="standard"
                        name="text"
                        value={text}
                        onChange={onTextChanged}
                    />
                </form>
            </Container>
        </>
    )

    return content
}

export default NewNoteForm