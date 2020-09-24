import React from 'react'

class FirstBasedClass extends React.Component {
    render(){
        return(
            <div>
                <Header username='João' />              
            </div>
        )
    }

}

class Header extends React.Component {
    render(){
        return (
            <header>
                <p>Oi, {this.props.username}</p>
            </header>
        )
    }
}


export default FirstBasedClass;