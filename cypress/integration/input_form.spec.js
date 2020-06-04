describe('Input form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    });

    it('when wrong search query - empty result state should be', () => {
        const textToType = 'qqqqqqq';
        const emptyResultState = 'No films found';

        cy.get('[class*=Search__Search__] input')
            .type(textToType)
            .should('have.value', textToType);
        cy.get('[class*=Search__Search__] button')
            .click();
        cy.contains(emptyResultState);
    });

    it('when right search query - movie item should be', () => {
        const textToType = 'Bloodshot';
        cy.get('[class*=Search__Search__] input')
            .type(textToType)
            .should('have.value', textToType);
        cy.get('[class*=Search__Search__] button')
            .click();
        cy.get('[class*=MovieItem__MovieItem__]')
            .contains(textToType);
    });
});