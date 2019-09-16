import React from 'react';
import {shallow} from 'enzyme';
import VaccinationIndicatorComponent from './vaccinationIndicatorComponent';

describe('Test vaccination indicator', () => {
    it('title should be valid', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }]
        };
        const wrapper = shallow(<VaccinationIndicatorComponent {...props}/>)
        const title = wrapper.find('h3');
        expect(title.text()).toBe('1/2 vaccinated');
    });

    it('should indicate strong when most employees are vaccinated', () => {
        const props = {
            employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: true }]
        };
        const wrapper = shallow(<VaccinationIndicatorComponent {...props}/>)
        const img = wrapper.find('img');
        expect(img.hasClass('strong')).toBeTruthy();
        expect(img.props()).toHaveProperty('data-testid', 'strong-img');
        wrapper.setProps({ employees: [{ id: 1, name: 'test', isVaccinated: true }, { id: 2, name: 'test', isVaccinated: false }]});
        expect(wrapper.find('img').hasClass('sick')).toBeTruthy();
    });
});