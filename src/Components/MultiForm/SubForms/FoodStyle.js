import React, { useRef } from 'react'
import './SubForm.css'

export default function FoodStyle(props) {


    const allCheckboxes = useRef([])

    const preventFunc = e => {
        e.preventDefault();

        const styleData = {
            foodStyle : []
        }

        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.foodStyle.push(checkbox.value)
            }
        })

        props.modifyIndex(4, styleData)
    }

    const handleReturn = () => {
        props.modifyIndex(2)
    }

   

    const addCheck = el => {
        if(el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el)
        }
    }

    return (
        <form
        className="checkbox-form"
        onSubmit={preventFunc}>
            <p>Quelles sont tes cuisine préférées</p>
            <span>Choix multiples.</span>
            
            <label htmlFor="italian">
                Italienne
            </label>
            <input ref={addCheck} type="checkbox" id='italian' value="italian" />

            <label htmlFor="japanese">
                japonaise
            </label>
            <input ref={addCheck} type="checkbox" id='japanese' value="japanese" />

            <label htmlFor="indian">
                Indienne
            </label>
            <input ref={addCheck} type="checkbox" id='indian' value="indian" />

            <label htmlFor="thaï">
                Thaïlandaise
            </label>
            <input ref={addCheck} type="checkbox" id='thaï' value="thaï" />

            <label htmlFor="francaise">
                Française
            </label>
            <input ref={addCheck} type="checkbox" id='francaise' value="francaise" />

            <label htmlFor="chinoise">
                Chinoise
            </label>
            <input ref={addCheck} type="checkbox" id='chinoise' value="chinoise" />

            <div className="container-nav-btns">
                <button 
                onClick={handleReturn}
                type="button" className="prev">Précédent</button>
                <button>Valider</button>
            </div>

            
        </form>
    )
}
