import React from 'react'

const buildControl = (props) => (
    <div>
        <div>{props.label}</div>
        <button>Subtract</button>
        <button>Add</button>
    </div>
)


export default buildControl 