describe("Verify check box and drop donwn ", ()=>{

    it("verify dropdown", ()=>{

        cy.visit('https://the-internet.herokuapp.com/dropdown')

        
        // i want to get text of drop down value

        cy.get("#dropdown").then((dropdText)=>{

            cy.log(dropdText.text())
        })

        cy.get("#dropdown").select("Option 1")

        cy.get("#dropdown").select("Option 2")









    })

    it("verify dropdwon",()=>{


    })



})