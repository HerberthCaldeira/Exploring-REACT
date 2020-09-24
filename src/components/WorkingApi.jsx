import React from 'react'


export default class WorkingApi extends React.Component {

    constructor(){
        super()
        this.state = {
            isLoading: false,
            character: {}
        }

    }

    componentDidMount (){
        this.setState({ isLoading:true })
        
        fetch( 'api/people/1')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoading:false,
                    character:data
                })              
            });
           
    }

    render(){
        return (
            <div>
                <p>{this.state.isLoading ? 'Loading...' : this.state.character.name }</p>
            </div>
        )
    }




} 