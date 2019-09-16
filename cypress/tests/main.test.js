describe('e2e', () => {
    it('validate all', () => {
        cy.visit('http://127.0.0.1:8080');
        cy.get('[test-dataid="edit-employees-button"]').click();
        cy.get('[test-dataid="employee-checkbox"]').first().click();
        cy.get('[test-dataid="edit-employees-button"]').click();
        const indicatorImage = cy.get('[test-dataid="strong-img"]');
        expect(indicatorImage).to.be.exist;
    })
})