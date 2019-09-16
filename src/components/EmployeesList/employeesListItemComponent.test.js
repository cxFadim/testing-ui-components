import React, {Component} from 'react';
import EmployeesListItemComponent from './employeesListItemComponent';
import {shallow} from 'enzyme';

describe('Severity Item', () => {
    it('input should be checked if isVaccinated is true', () => {
        const props = {
            employee: { id: 1, name: 'test', isVaccinated: true },
            updateEmployee: jest.fn(),
            isDisabled: false
        };
        const wrapper = shallow(<EmployeesListItemComponent {...props}/>)
        const input = wrapper.find('input');
        expect(input.props().checked).toBe(true);
    });

    it('input should not be checked if isVaccinated is false', () => {
        const props = {
            employee: { id: 1, name: 'test', isVaccinated: false },
            updateEmployee: jest.fn(),
            isDisabled: false
        };
        const wrapper = shallow(<EmployeesListItemComponent {...props}/>)
        const input = wrapper.find('input');
        expect(input.props().checked).toBe(false);
    });

    it('updateEmployee should be called on clicking input', () => {
        const props = {
            employee: { id: 1, name: 'test', isVaccinated: false },
            updateEmployee: jest.fn(),
            isDisabled: false
        };
        const wrapper = shallow(<EmployeesListItemComponent {...props}/>)
        wrapper.find('input').simulate('change');
        expect(props.updateEmployee).toBeCalled();
    });
});