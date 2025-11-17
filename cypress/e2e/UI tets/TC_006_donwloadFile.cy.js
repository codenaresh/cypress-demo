describe('donwload the file', ()=>{

    it('Download PDF file', () => {
        cy.downloadFile(
          'https://example.com/sample.pdf',       // File URL
          'cypress/downloads',                    // Download folder
          'sample.pdf'                            // Saved file name
        );
      });
      
})