import React, {Component} from 'react';
import {mount, shallow} from 'enzyme';
import EmployeesListComponent from './employeesListComponent';

describe('employees list - unit tests', () => {
    it('button rendered with Edit keyword and toggled on click', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }],
            updateEmployees: jest.fn(),
        };
        const wrapper = shallow(<EmployeesListComponent {...props}/>)
        let button = wrapper.find('input');
        expect(button.props()).toHaveProperty('value', 'Edit');
        wrapper.setState({ editMode: true });
        button = wrapper.find('input');
        expect(button.props()).toHaveProperty('value', 'Save');
    });

    it('click on save will trigger updateEmployees function', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }],
            updateEmployees: jest.fn(),
        };
        const wrapper = shallow(<EmployeesListComponent {...props}/>)
        let button = wrapper.find('input');
        button.simulate('click');
        expect(props.updateEmployees).toBeCalledTimes(0);
        button.simulate('click');
        expect(props.updateEmployees).toBeCalledTimes(1);
    });
});


describe('employees list - integration tests', () => {
    it('component will render all the employees', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }],
            updateEmployees: jest.fn(),
        };
        const wrapper = mount(<EmployeesListComponent {...props}/>)
        const employees = wrapper.find('EmployeesListItemComponent');
        expect(employees.length).toEqual(props.employees.length);
    });

    it('component will render all the employees', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }],
            updateEmployees: jest.fn(),
        };
        const wrapper = mount(<EmployeesListComponent {...props}/>)
        const employees = wrapper.find('EmployeesListItemComponent');
        employees.first().find('input').simulate('change');
        expect(wrapper.state('employees')).toEqual([{ id: 1, name: 'test', isVaccinated: false }, { id: 2, name: 'test', isVaccinated: false }]);
    });
});