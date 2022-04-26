import React from 'react'
import Form2 from './form2'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            department: "",
            rating:"",
            users: [],
            displayComp:false
        }
    }
        
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        
    }
    
    handleSubmit = (e) => {
      const tempArray = [...this.state.users];
      tempArray.push({ name: this.state.name,department: this.state.department, rating: this.state.rating })
      this.setState({ users: tempArray, displayComp:true, name: "",department: "" , rating: ""})
      e.preventDefault()
    }
    
    updateComponent = () =>{
        this.setState({displayComp:!this.state.displayComp})
    }

    render() {
        return (
            <div>
            {this.state.displayComp 
                ? 
                <Form2 users={this.state.users} updateComponent={this.updateComponent}/>
                : 
                <div className="formDiv">
                    <h1>Employee Feedback Form</h1>
                <form>
                <label className="label">Name :</label> 
                <input value={this.state.name} id="name" onChange={this.handleChange} />
                <br/>
                <br/>
                <label>Department :</label> 
                <input value={this.state.department} id="department" onChange={this.handleChange} />
                <br/>
                <br/>
                <label>Rating :</label> 
                <input type={"number"} value={this.state.rating} id="rating" onChange={this.handleChange} />
                <br/>
                <br/>
                <button className="button" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            }
            </div>
            )
        }
    }

export default Form