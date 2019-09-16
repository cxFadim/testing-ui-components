import React, {Component} from 'react';
import EmployeesListItemComponent from './employeesListItemComponent';

class EmployeesListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            editMode: false,
            employees: this.props.employees
        };
    }

    render() {
        return (<div className='employees-container'>
            <ul className='employees-list'>
                {
                    this.state.employees.map(employee => <EmployeesListItemComponent employee={employee}
                                                                                     isDisabled={!this.state.editMode}
                                                                                 updateEmployee={this.updateEmployee}
                                                                                 key={employee.id}/>)
                }
            </ul>
            <input type='button' test-dataid='edit-employees-button' onClick={this.toggleEditButton} value={this.state.editMode === true ? 'Save' : 'Edit'}/>
            </div>
        );
    }

    updateEmployee = (employeeId) => {
        const { employees } = this.state;
        employees.map( employee => {
            if(employee.id === employeeId){
                employee.isVaccinated = !employee.isVaccinated;
            }
            return employee;
        });
        this.setState({
            employees
        });
    }

    toggleEditButton = e => {
        if(this.state.editMode === true){
            this.props.updateEmployees(this.state.employees);
        }
        this.setState({
            editMode: !this.state.editMode
        });
    }
}

export default EmployeesListComponent;