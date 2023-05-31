import { useState, useEffect } from "react"
import { useUpdateClientMutation, useDeleteClientMutation } from "./clientApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { ROLES } from "../../config/roles"

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const EditClientForm = ({ client }) => {

    const [updateClient, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateClientMutation()

    const [deleteClient, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteClientMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState(client.username)
    const [location, setLocation] = useState(client.location)
    const [orders, setOrders] = useState(client.orders)
    const [active, setActive] = useState(client.active)
    const [phonenumber, setPhoneNumber] = useState(client.phonenumber)




    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess || isDelSuccess) {
            setUsername('')
            setLocation('')
            setOrders([])
            navigate('/dash/clients')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onLocationChanged = e => setLocation(e.target.value)
    const onPhoneChanged = e => setPhoneNumber(e.target.value)
    const onOrdersChanged = e => setOrders(e.target.value)
    const onActiveChanged = () => setActive(pre => !pre)


    let canSave = [username,location,phonenumber,orders].every(Boolean) && !isLoading
    const onSaveClientClicked = async (e) => {
        if (canSave) {
            await updateClient({ id: client.id, username,location, active, phonenumber,orders })
            navigate('/dash/clients')


        } else {
            <Alert 
            severity="error"
            >All Fields Are Required!</Alert>
        }
    }

    const onDeleteClientClicked = async () => {
        await deleteClient({ id: client.id })
    }




    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const AlertErr = errContent ? (
        <Alert 
        severity="error"
        >{errContent}</Alert>
    ) : ''

    const content = (
        <>
            <CssBaseline />

            <Container maxWidth="sm">

            {AlertErr}


            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit User</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveClientClicked}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="icon-button"
                            title="Delete"
                            onClick={onDeleteClientClicked}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>

                </div>
                <label className="form__label" htmlFor="username">
                    Username: </label>

                <TextField
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={onUsernameChanged}
                    label="Outlined"
                    variant="outlined"
                />


                <label className="form__label" htmlFor="location">
                    Location:
                </label>

                <TextField
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="off"
                    value={location}
                    onChange={onLocationChanged}
                    label="Outlined"
                    variant="outlined"
                />

                <label htmlFor="Phone">
                    Phone Number
                </label>

                <TextField
                    id="Phone"
                    name="Phone"
                    type="tel"
                    autoComplete="off"
                    value={phonenumber}
                    onChange={onPhoneChanged}
                    label="Outlined"
                    variant="outlined"
                />

                <label className="form__label" htmlFor="Orders">
                    ORDERS:</label>

                <TextField
                    id="Orders"
                    name="Orders"
                    type="text"
                    autoComplete="off"
                    value={orders}
                    onChange={onOrdersChanged}
                    label="Outlined"
                    variant="outlined"
                />

                <label className="form__label form__checkbox-container" htmlFor="client-active">
                    ACTIVE:


                    <Checkbox
                        {...label}
                        defaultChecked
                        color="success"
                        value={active}
                        name="client-active"
                        id="client-active"
                        onChange={onActiveChanged}
                    />

                </label>

        
            </form>
            </Container>

        </>
    )

    return content
}
export default EditClientForm