import { useState } from "react"
import "./forms.css"

const Forms = (props) => {



    const textValue = (e) => {
        props.aoAlterado(e.target.value)
    }


    return (
        <>
            <div>
                <div className="form">
                    <label>{props.label}</label>
                    <input value={props.valor} onChange={textValue} required={props.obrigatorio} type="text" placeholder={props.placeholder}></input>
                </div>
            </div>
        </>
    )
}


export default Forms