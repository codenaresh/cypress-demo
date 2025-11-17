/*

java script alert type

1. alert box   eg ok warning

2.confrim vbox   ok/cancel

3. prompt box  asking for crenditial

NOtes: cypress by deafult clicks on ok button


*/



describe('alert ', ()=>{

    it('alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:alert',(alerttext)=>{

            expect(alerttext).eq('I am a JS Alert')

        })

        

        cy.contains('Click for JS Alert').click()

        
    })
})