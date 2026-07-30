import React, { useContext, useState } from 'react'
import B from './B'
import { myContext } from './Context/TodoContext'

const A = () => {
    const [Value, setValue] = useState("")
    const { addTask } = useContext(myContext)
    // console.log({ Data });

    return (
        <div>
            <h1>A Component</h1>
            <hr />
            <form onSubmit={(e) => {
                e.preventDefault()
                addTask(Value)
                setValue("")
            }}>
                <input type="text"
                    onChange={(e) => { setValue(e.target.value) }}
                    value={Value} />
                <button type='submit'>Submit</button>
            </form>
            <hr />
            <B></B>

        </div>
    )
}

export default A
