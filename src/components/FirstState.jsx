import React from 'react'


export default class FirstState extends React.Component {
    constructor(){
        super()
        this.state = {
            name: 'john',
            age:33
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years</h1>
            </div>
        )
    }
}