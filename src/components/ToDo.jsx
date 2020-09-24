import React from 'react'
import TodoData from '../data/todoData'
//component
import ToDoItem from './ToDo/ToDoItem'


export default class ToDo extends React.Component{

    constructor(){
        super()
        this.state = {
            TodoData: TodoData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange( id ){               
        
        this.setState( prevState => {    
            const updatedData = prevState.TodoData.map(todo =>{                
                if(todo.id === id){
                    todo.completed = !todo.completed                   
                }

                return todo
            })

            return {
                TodoData: updatedData
            }
        })
    }

    render(){
        const todoComponents = this.state.TodoData.map( item => <ToDoItem 
            key={item.id}
            item={item}
            handleChange={this.handleChange} /> )

        return (    
            <div className="grid-container">
                <div className="grid-item-1"></div>
                <div className="grid-item-2 todo-list">
                    {todoComponents}
                </div>
                <div className="grid-item-3"></div>
            </div>          
        )
    }
}





