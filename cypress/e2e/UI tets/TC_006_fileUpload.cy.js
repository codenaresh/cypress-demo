describe('file upload', ()=>{

    it('file upload ', ()=>{

        const filepath='wpx.png'

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile(filepath)

        cy.get('#file-submit').click()

        cy.get('#uploaded-files').contains('wpx.png')


    })
})