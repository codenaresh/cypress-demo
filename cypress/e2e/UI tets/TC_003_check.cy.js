describe("checkbox", ()=>{

    it('checkbox test',()=>{

        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get("[type='checkbox']").first().check()

        cy.get("[type='checkbox']").last().uncheck()

            
    })
})