import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';
import {selectClientById} from './clientApiSlice'

const Client = ({clientId}) => {
    const client = useSelector(state => selectClientById(state,clientId))
    const navigate = useNavigate()

    if(client) {
        const handleEdit = () =>  navigate(`/dash/clients/${clientId}`)

        const clientordersString = client.orders.toString().replaceAll(',',', ')
        const cellStatus = client.active ? '': 'table__cell--inactive'

        return (
            <tr className="table__row client">
            <td className={`table__cell ${cellStatus}`}>{client.username}</td>
            <td className={`table__cell ${cellStatus}`}>{clientordersString}</td>
            <td className={`table__cell ${cellStatus}`}>
                <button
                    className="icon-button table__button"
                    onClick={handleEdit}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </td>
        </tr>
        )
    }
}

export default Client