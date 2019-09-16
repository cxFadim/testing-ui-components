import React from 'react';

const VaccinationIndicatorComponent = ({ employees }) => {
    const vaccinatedEmployees = employees.filter( emp => emp.isVaccinated ).length;
    const vaccinatedPercent = vaccinatedEmployees/employees.length;
    const isCompanyEnoughVaccinated = vaccinatedPercent > 0.5;

    return (
        <div test-dataid='indicator-wrapper' className='indicator'>
            <h3>{vaccinatedEmployees}/{employees.length} vaccinated</h3>
            {
                isCompanyEnoughVaccinated ? <img test-dataid='strong-img' className='strong' src='../../../assets/strong.gif'/>
                : <img test-dataid='sick-img' className='sick' src='../../../assets/sick.gif'/>
            }
        </div>
    );
}

export default VaccinationIndicatorComponent;