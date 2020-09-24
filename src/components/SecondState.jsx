import React from 'react'


export default class SecondState extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render(){
        return (
            <div>
                <h1>You are currently loged {this.state.isLoggedIn? 'in':'out'}</h1>
            </div>
        )
    }


}