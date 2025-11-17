describe(' Demo test case ', ()=>{

    it('lanuage ddtection test', ()=>{

        let url="https://translate.google.com/?sl=auto&tl=hi&op=translate"

        cy.visit(url)

        let word='hello world'

        cy.get('textarea[aria-label="Source text"]').type(word)

        cy.wait(2000)

        cy.get('[role="tab"]').eq(0).then((usertext)=>{

            cy.log(usertext.text())
        })
    })
})