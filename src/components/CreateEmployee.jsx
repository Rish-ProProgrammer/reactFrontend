import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';

class CreateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            
            Name: '',
            Role: ''
            
        }

    }

    
  
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Enter Employee Details</h3>
                                {
                                    //this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Employee Name </label>
                                            <input placeholder="Enter name" name="Name" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Role </label>
                                            <input placeholder="Enter role" name="Role" className="form-control" 
                                                />
                                        </div>
                                        

                                        <button className="btn btn-success" >Add Employee</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        
        )
        //const fs = require('fs');

const employeeDetails = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
];


    }
}

export default CreateEmployee
