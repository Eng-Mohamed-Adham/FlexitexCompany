import { useState, useEffect } from "react"
import { useUpdateNoteMutation, useDeleteNoteMutation } from "./notesApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useDeleteClientMutation } from "../clients/clientApiSlice"
import { selectClientById } from "../clients/clientApiSlice"
import useAuth from '../../hooks/useAuth';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container, CssBaseline, MenuItem } from "@mui/material"


const EditNoteForm = ({ note, users }) => {
    const {isManager,isAdmin} = useAuth()


    const [updateNote, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateNoteMutation()

    const [deleteNote, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteNoteMutation()

    const [deleteClient,{
        isSuccess:isDelSuccessClient,

    }] = useDeleteClientMutation()

    const client = useSelector(state => selectClientById(state, note.clientId))


    const navigate = useNavigate()

    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)
    const [completed, setCompleted] = useState(note.completed)
    const [userId, setUserId] = useState(note.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setText('')
            setUserId('')
            navigate('/dash/notes')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onCompletedChanged = e => setCompleted(prev => !prev)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveNoteClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await updateNote({ id: note.id, user: userId, title, text, completed,clientId:note.clientId })
        }
    }

    const onDeleteNoteClicked = async () => {
        if(client){
                if(client.id === note.clientId){
                    if(client.orders.length === 0){
                        await deleteNote({ id: note.id })
                        await deleteClient({ id: client.id })
                    }
                    else{
                        await deleteNote({ id: note.id })

                    }

                }

        }
    }

    const created = new Date(note.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(note.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

 

   

    let deleteButton = null
    if(isManager || isAdmin) {
        deleteButton = (
            <button
            className="icon-button"
            title="Delete"
            onClick={onDeleteNoteClicked} >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        )
    }


    const content = (
        <>
        <CssBaseline />
            <Container maxWidth="sm">
            {/* <p className={errClass}>{errContent}</p> */}

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Note #{note.ticket}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveNoteClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    {deleteButton}
                    </div>
                </div>
                <label className="form__label" htmlFor="note-title">
                    Title:</label>
                <TextField
                    id="note-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label className="form__label" htmlFor="note-text">
                    Text:</label>
                <TextField
                    id="note-text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />
                <div className="form__row">
                    <div className="form__divider">
                        <label className="form__label form__checkbox-container" htmlFor="note-completed">
                            WORK COMPLETE:
                            <TextField
                                className="form__checkbox"
                                id="note-completed"
                                name="completed"
                                type="checkbox"
                                checked={completed}
                                onChange={onCompletedChanged}
                            />
                        </label>

                        <label className="form__label form__checkbox-container" htmlFor="note-username">
                            ASSIGNED TO:</label>
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
                    </div>
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
            </Container>
        </>
    )

    return content
}

export default EditNoteForm