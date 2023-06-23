import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewPartMutation } from "./partsApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, CssBaseline } from "@mui/material"

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



    const content = (
        <>
            {/* <p className={errClass}>{error?.data?.message}</p> */}
            <CssBaseline />
            <Container maxWidth="sm">
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
                    <Box
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
            
                    <TextField
                        variant="outlined"
                        label="Id"
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="off"
                        value={id}
                        onChange={onIdChanged}
                    />
            
                    <TextField
                        variant="outlined"
                        id="Name"
                        label="Name"
                        name="Name"
                        type="text"
                        autoComplete="off"
                        value={name}
                        onChange={onNameChanged}
                    />
                    </Box>
                
                        <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                    <TextField
                        variant="outlined"
                        id="production"
                        label="production"

                        name="production"
                        type="text"
                        autoComplete="off"
                        value={productiondate}
                        onChange={onProductionDateChanged}
                    />
                
                    <TextField
                        variant="outlined"
                        id="life-span"
                        label="LifeSpan"
                        name="life-span"
                        type="text"
                        autoComplete="off"
                        value={lifespan}
                        onChange={onLifeSpanChanged}
                    />
            
                    <TextField
                        variant="outlined"
                        type="number"
                        label="Count"
                        id="count"
                        name="text"
                        value={count}
                        onChange={onCountChanged}
                    />

                    <TextField
                        variant="standard"
                        id="desc"
                        name="desc"
                        label="Description"
                        multiline
                        rows={4}
                        value={desc}
                        onChange={onDescChanged}
                    />
                    </Box>
                
                    
                </form>
            </Container>
        </>
    )

    return content
}

export default NewPartForm