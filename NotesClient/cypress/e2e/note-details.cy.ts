describe('Note Details Component', () => {
  beforeEach(() => {
    // Visit the page containing the NoteDetailsComponent
    cy.visit('/');
  });

  it('should display notes and allow language switching', () => {
    // Check if the title is displayed in the default language
    cy.contains('Notes', { timeout: 10000 }).should('be.visible');

    // Switch language to Spanish
    cy.get('[data-bs-toggle="dropdown"]').click(); // Open the dropdown
    cy.contains('Español').click(); // Select Spanish language

    // Verify that the text in Spanish is displayed
    cy.contains('Notas').should('be.visible'); // Assuming 'Notas' is the Spanish translation for "Notes"

    // Switch language to English
    cy.get('[data-bs-toggle="dropdown"]').click(); // Open the dropdown again
    cy.contains('English').click(); // Select English language

    // Verify that the text in English is displayed
    cy.contains('Notes').should('be.visible'); // Assuming 'Notes' is the English text
  });
});
