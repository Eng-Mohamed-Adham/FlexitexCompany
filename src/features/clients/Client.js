import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';
import {selectClientById} from './clientApiSlice'
import { TableRow,TableCell } from '@mui/material';


const Client = ({clientId}) => {
    const client = useSelector(state => selectClientById(state,clientId))
    const navigate = useNavigate()

    if(client) {
        const handleEdit = () =>  navigate(`/dash/clients/${clientId}`)

        const clientordersString = client.orders.toString().replaceAll(',',', ')

        return (
            <TableRow>
            <TableCell>{client.username}</TableCell>
            <TableCell>{clientordersString}</TableCell>
            <TableCell>
                <button
                    className="icon-button table__button"
                    onClick={handleEdit}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </TableCell>
        </TableRow>
        )
    }
}

export default Client