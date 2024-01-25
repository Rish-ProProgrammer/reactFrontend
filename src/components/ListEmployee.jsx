import React, { Component } from 'react';
import UpdateEmployeeComponent from './UpdateEmployee';

class ListEmployee extends Component {
    constructor(props){
        
        super(props)
        this.state={
            emp: [[1,'TechGeekNextUser','Admin'],[2,'User-2','Supervisor']],
            isUpdateClicked: false
        };
        //this.addEmployee=this.addEmployee.bind(this);
        
  
    }
    handleUpdateClick = () => {
        this.setState({ isUpdateClicked: true });
      };
    render() {
        const { employee } = this.props;
        
    if (this.state.isUpdateClicked) {
        this.props.hideButtons();
      return <UpdateEmployeeComponent />;
    }
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered' style={{ margin: '0 auto', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th> Id</th>
                                <th> Name</th>
                                <th> Role</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.emp.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee[0]}</td> 
                                    <td>{employee[1]}</td> 
                                    <td>{employee[2]}</td> 
                                    <td>
                                                 <button className="btn btn-info" onClick={this.handleUpdateClick}>Update </button>
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button>
                                                 
                                             </td>
        </tr>
    ))}
</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;
