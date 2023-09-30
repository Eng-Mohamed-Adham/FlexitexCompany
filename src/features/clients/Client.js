import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';
import {selectClientById} from './clientApiSlice'
import { TableRow,TableCell, Button } from '@mui/material';


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
                <Button
                component='button'
                    onClick={handleEdit}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
            </TableCell>
        </TableRow>
        )
    }
}

export default Client