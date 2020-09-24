import React from 'react'

export default function ToDoItem(props){

    const propStyle = {
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration: 'line-through'
    }  
  
    return (
        <div>
            <input 
                type="checkbox"             
                className="item"
                checked={props.item.completed}
                onChange={()=> props.handleChange(props.item.id)}
            />
            <span className="span" style={ props.item.completed ? propStyle : null } >{props.item.text}</span>
            <hr/>
        </div>
    )
} 