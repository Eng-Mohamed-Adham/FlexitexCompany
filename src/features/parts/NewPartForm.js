import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewPartMutation } from "./partsApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const NewPartForm = () => {

    const [addNewPart, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewPartMutation()

    const navigate = useNavigate()
    const [id,setId] = useState(Number)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [productiondate, setProductionDate] = useState('')
    const [lifespan,setLifeSpan] = useState(''
    )
    const [count,setCount] = useState(0)

    useEffect(() => {
        if (isSuccess) {
            setId(null)
            setName('')
            setDesc('')
            setProductionDate('')
            setLifeSpan('')
            setCount()
            navigate('/dash/parts')
        }
    }, [isSuccess, navigate])

    const onIdChanged = e => setId(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onProductionDateChanged = e => setProductionDate(e.target.value)
    const onLifeSpanChanged = e => setLifeSpan(e.target.value)
    const onCountChanged = e => setCount(e.target.value);


    const canSave = [id,name, desc, productiondate,count].every(Boolean) && !isLoading

    const onSavePartClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewPart({ id,name,desc,productiondate,lifespan,count })
        }
    }

  

    const errClass = isError ? "errmsg" : "offscreen"
    const validIdClass = !id ? "form__input--incomplete" : ''
    const validNameClass = !name ? "form__input--incomplete" : ''
    const validDescClass = !desc ? "form__input--incomplete" : ''
    const validProductiondateClass = !productiondate ? "form__input--incomplete" : ''
    const validLifeSpanClass = !lifespan ? "form__input--incomplete" : ''

    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <form className="form" onSubmit={onSavePartClicked}>
                <div className="form__title-row">
                    <h2>New Part</h2>
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
                <label className="form__label" htmlFor="title">
                    Id:</label>
                <input
                    className={`form__input ${validIdClass}`}
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={id}
                    onChange={onIdChanged}
                />
                <label className="form__label" htmlFor="title">
                    Name:</label>
                <input
                    className={`form__input ${validNameClass}`}
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={onNameChanged}
                />

                <label className="form__label" htmlFor="text">
                    Desc:</label>
                <textarea
                    className={`form__input form__input--text ${validDescClass}`}
                    id="text"
                    name="text"
                    value={desc}
                    onChange={onDescChanged}
                />

                <label className="form__label" htmlFor="title">
                    productionDate:</label>
                <input
                    className={`form__input ${validProductiondateClass}`}
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={productiondate}
                    onChange={onProductionDateChanged}
                />
                <label className="form__label" htmlFor="title">
                    LifeSpan:</label>
                <input
                    className={`form__input ${validLifeSpanClass}`}
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
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

            </form>
        </>
    )

    return content
}

export default NewPartForm