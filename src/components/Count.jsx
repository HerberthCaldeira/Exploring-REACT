import React from 'react'


export default class Count extends React.Component {
    constructor(){
        super()
        this.state = {
            count:0
        }

        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }

    add(){
        this.setState((prevState) => {
            return{
                count: this.state.count+1
            }
        })
    }

    sub(){
        this.setState((prevState) => {
            return{
                count: this.state.count-1
            }
        })
    }

    render(){
        return(

            <div>
                <span>{this.state.count}</span>
                <button onClick={this.add}>add +1</button>
                <button onClick={this.sub}>sub -1</button>
            </div>

        )
    }
}