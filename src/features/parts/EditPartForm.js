import { useState, useEffect } from "react"
import { useUpdatePartMutation, useDeletePartMutation } from "./partsApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"

import useAuth from '../../hooks/useAuth';
const EditNoteForm = ({ part }) => {
    const {isManager,isAdmin} = useAuth()


    const [updatePart, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdatePartMutation()

    const [deletePart, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeletePartMutation()

    const navigate = useNavigate()

    const [name, setName] = useState(part.name)
    const [desc, setDesc] = useState(part.desc)
    const [productiondate, setProductionDate] = useState(part.productiondate)
    const [lifespan, setLifeSpan] = useState(part.lifespan)
    const [count,setCount] = useState(0)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setName('')
            setDesc('')
            setProductionDate('')
            setLifeSpan('')
            navigate('/dash/parts')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onProductionDateChanged = e => setProductionDate(e.target.value)
    const onLifeSpanChanged = e => setLifeSpan(e.target.value)
    const onCountChanged = e => setCount(e.target.value);
    const canSave = [name, desc, productiondate,lifespan].every(Boolean) && !isLoading

    const onSavePartClicked = async (e) => {
        if (canSave) {
            await updatePart({ id: part.id, name, desc, productiondate, lifespan })
        }
    }

    const onDeletePartClicked = async () => {
        await deletePart({ id: part.id })
    }

    const created = new Date(part.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(part.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    // const options = users.map(user => {
    //     return (
    //         <option
    //             key={user.id}
    //             value={user.id}

    //         > {user.username}</option >
    //     )
    // })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validNameleClass = !name ? "form__input--incomplete" : ''
    const validDescClass = !desc ? "form__input--incomplete" : ''
    const validProductionDateClass = !productiondate ? "form__input--incomplete" : ''
    const validLifeSpanClass = !lifespan ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    let deleteButton = null
    if(isManager || isAdmin) {
        deleteButton = (
            <button
            className="icon-button"
            title="Delete"
            onClick={onDeletePartClicked} >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        )
    }


    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Part #{part.name}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSavePartClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                      {deleteButton}
                    </div>
                </div>
                <label className="form__label" htmlFor="note-title">
                    Name:</label>
                <input
                    className={`form__input ${validNameleClass}`}
                    id="note-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={onNameChanged}
                />

                <label className="form__label" htmlFor="note-title">
                    Desc:</label>
                    <textarea
                        className={`form__input ${validDescClass}`}
                        id="note-title"
                        name="title"
                        type="text"
                        autoComplete="off"
                        value={desc}
                        onChange={onDescChanged}
                    />
                <label className="form__label" htmlFor="note-text">
                    productiondate:</label>
                <input
                    className={`form__input form__input--text ${validProductionDateClass}`}
                    id="note-text"
                    name="text"
                    value={productiondate}
                    onChange={onProductionDateChanged}
                />
                <label className="form__label" htmlFor="note-text">
                    LifeSpan:</label>
                <input
                    className={`form__input form__input--text ${validLifeSpanClass}`}
                    id="note-text"
                    name="text"
                    value={lifespan}
                    onChange={onLifeSpanChanged}
                />
                 <label className="form__label" htmlFor="note-text">
                    Count:</label>
                <input
                    type="number"
                    className={`form__input form__input--text ${validLifeSpanClass}`}
                    id="note-text"
                    name="text"
                    value={count}
                    onChange={onCountChanged}
                />

                <div className="form__row">
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditNoteForm