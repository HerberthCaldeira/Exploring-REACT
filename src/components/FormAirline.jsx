import React from 'react'




export default class FormAirline extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location:'brasil',
            isVegetarian: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target

        type === 'checkbox'? this.setState({[name]:checked}) :
            this.setState({ [name]:value })



    }

    render(){
        return (
            <form action="">
                <input 
                 type="text"
                 name="firstName"
                 value={this.state.firstName}
                 onChange={this.handleChange}
                 autoComplete="off"
                 placeholder="firstName"             
                />

                <input 
                 type="text"
                 name="lastName"
                 value={this.state.lastName}
                 onChange={this.handleChange}
                 autoComplete="off"
                 placeholder="lastName"           
                />

                <br/>

                <input 
                 type="checkbox"
                 name="isVegetarian"
                 checked={this.state.isVegetarian}
                 onChange={this.handleChange}
                 placeholder="lastName"           
                /> Vegetarian

                <br/>

                <input 
                 type="number"
                 name="age"
                 value={this.state.age}
                 onChange={this.handleChange}
                 placeholder="age"              
                />

                <br/>

                <input 
                 type="radio"
                 name="gender"
                 value="male"
                 checked={this.state.gender == 'male'}
                 onChange={this.handleChange}                            
                />Male

                <input 
                 type="radio"
                 name="gender"
                 value="famale"
                 checked={this.state.gender == 'famale'}
                 onChange={this.handleChange}                             
                />Famale

                <br/>

                <select name="location"
                 value={this.state.location}
                 onChange={this.handleChange}
                 >
                    <option value="brasil">Brasil</option>
                    <option value="eua">EUA</option>
                    <option value="europa">Europa</option>
                </select>

                <br/>
                <hr/>
                Name: {this.state.firstName} {this.state.lastName} <br/>                
                Vegan: {this.state.isVegetarian ? 'Yes': 'No'} <br/>             
                Age: {this.state.age} <br/>
                Gender: {this.state.gender} <br/>
                Location: {this.state.location} <br/>

            </form>
        )
    }





}