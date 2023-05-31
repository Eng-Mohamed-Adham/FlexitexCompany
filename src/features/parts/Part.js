import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectPartsById } from './partsApiSlice'
import useAuth from '../../hooks/useAuth'

const Part = ({ partId }) => {
    const {isManager,isAdmin} = useAuth()


    const part = useSelector(state => selectPartsById(state, partId))
    const navigate = useNavigate()

    if (part) {
            console.log(part.count);
        const created = new Date(part.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(part.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/parts/${partId}`)
        let editButton;
        if(isManager || isAdmin) {
            editButton = (

            <button
                className="icon-button table__button"
                onClick={handleEdit}
            >
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            
            )
        }
        return (
            <tr className="table__row">
                {/* <td className="table__cell part__status">
                    {part.id
                        ? <span className="part__status--completed">Completed</span>
                        : <span className="part__status--open">Open</span>
                    }
                </td> */}
                <td className="table__cell part__title">{part.name}</td>

                <td className="table__cell part__created">{created}</td>
                {/* <td className="table__cell part__updated">{updated}</td> */}
                <td className="table__cell part__username">{part.desc}</td>
                <td className="table__cell part__username">{part.productiondate}</td>
                {/* <td className="table__cell part__username">{part.lifespan}</td> */}
                <td className="table__cell part__username">{part.count}</td>
                <td className="table__cell">

                {editButton}
                </td>
            </tr>
        )
            

    } else return null
}
export default Part