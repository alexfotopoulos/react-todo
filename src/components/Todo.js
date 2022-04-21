import React, { useState } from 'react'
import './Todo.css'

export default function Todo(props) {
    const [isChecked, setIsChecked] = useState(false)

    function toggleChecked() {
        setIsChecked(prevIsChecked => !prevIsChecked)
    }
    return (
        <div className='Todo'>
            <div>
                <input onClick={toggleChecked} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label className={!isChecked ? "form-check-label" : "form-check-label checked"} htmlFor="flexCheckDefault">{props.todo}</label>
            </div>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    )
}
