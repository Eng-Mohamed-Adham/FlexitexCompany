import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectNoteById } from './notesApiSlice'
import { selectClientById } from '../clients/clientApiSlice'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Note = ({ noteId }) => {

    const note = useSelector(state => selectNoteById(state, noteId))
    const navigate = useNavigate()
    const client = useSelector(state => selectClientById(state, note.clientId))


    if (note) {
        console.log(note.createdAt);
        const created = new Date(note.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(note.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/notes/${noteId}`)

        return (
            <TableRow>
                
                <TableCell
                    align='right'
                    >
                    
                        {note.completed
                            ? <span className="note__status--completed">Completed</span>
                            : <span className="note__status--open">Open</span>
                        }
                    
                </TableCell>
                <TableCell
                    align='right'
                    >{created} </TableCell>

                <TableCell
                align='right' 
                >
                    {updated}</TableCell>
                <TableCell
                align='right' 
                >
                    {note.title}</TableCell>

                <TableCell
                align='right' 
                >
                    {client.username}
                    </TableCell>
                <TableCell
                align='right' 
                >
                    {note.username}</TableCell>

                <TableCell
                align='right' 
                >
                        <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </TableCell>
            </TableRow>
        )

    } else return null
}
export default Note