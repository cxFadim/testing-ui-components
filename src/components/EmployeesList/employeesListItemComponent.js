import React, {Component} from 'react';

class EmployeesListItemComponent extends Component {
    render() {
        const { employee , updateEmployee, isDisabled } = this.props;
        return (
            <li className='employee-item'>
                { isDisabled ? <input test-dataid='employee-checkbox' type='checkbox' checked={employee.isVaccinated} onChange={() => updateEmployee(employee.id)} disabled/>
                : <input test-dataid='employee-checkbox' type='checkbox' checked={employee.isVaccinated} onChange={() => updateEmployee(employee.id)}/>}
                <span> {employee.name} </span>
            </li>
        );
    }
}

export default EmployeesListItemComponent;