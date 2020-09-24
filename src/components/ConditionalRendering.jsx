import React from 'react'

export default class ConditionalRendering extends React.Component {
    constructor() {
        super()
        this.state = { 
            isLogged: false
        }

        this.handleClick    = this.handleClick.bind(this)
    
    }

    handleClick(){       
        this.setState( prevState => { 
            return{
                isLogged:!prevState.isLogged 
            }   
        })
    }
      

    render(){
        let displayButtonText = this.state.isLogged ? 'log out' : 'log in' 
        let displayStatusText = this.state.isLogged ? 'Logged in' : 'logged out'

        return (
            <div>
                status: { displayStatusText }
                <button onClick={this.handleClick}> { displayButtonText } </button>
               
            </div>
        )
    }


}