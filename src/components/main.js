import React from 'react';
import EmployeesListComponent from './EmployeesList/employeesListComponent';
import VaccinationIndicatorComponent from './Indicator/vaccinationIndicatorComponent';

class Main extends React.Component {

    state = {
        employees: [
            {
                id: 0,
                name: 'Lior',
                isVaccinated: false
            },
            {
                id: 1,
                name: 'Tomer',
                isVaccinated: true
            }
        ]
    };

    updateEmployees = employees => this.setState({ employees });

    render() { 
        return (<div className='main'>
            <h1>Checkmarx Vaccination Management System </h1>
            <div className='content'>
                <EmployeesListComponent employees={this.state.employees} updateEmployees={this.updateEmployees}/>
                <VaccinationIndicatorComponent employees={this.state.employees}/>
            </div>
        </div>);
    }
}

export default Main;