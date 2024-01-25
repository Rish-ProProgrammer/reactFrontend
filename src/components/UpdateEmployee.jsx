import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        
        
    }
    

    
    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Id </label>
                                            <input placeholder="Enter Id" name="id" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Employee Name </label>
                                            <input placeholder="Enter employee name" name="name" className="form-control" 
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Role </label>
                                            <input placeholder="Enter role" name="role" className="form-control" 
                                                />
                                        </div>

                                        <button className="btn btn-success" >Save</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployee
