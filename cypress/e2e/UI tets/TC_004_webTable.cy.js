/*

useful cypress coomands

1.each  

2. wrap

3. within

4.parent


*/

describe('Hnadling web table', ()=>{

    beforeEach("handling table", ()=>{

        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it("get the whole table data", ()=>{

        cy.get("#table1>tbody>tr").should('have.length',4)

        cy.get("#table1>tbody>tr:eq(0)>td").should('have.length',6)

        cy.get("#table1>tbody>tr").each(($row, index,$rows)=>{

            cy.wrap(($row)).within(()=>{

                cy.get('td').each(($celldata, index,$colums)=>{

                    cy.log($celldata.text())
                })
            })
        })
    })

    it('get single row data', ()=>{
     
        cy.get("#table1>tbody>tr").first().within(()=>{

            cy.get('td').eq(1).should('have.text','John')

            cy.get('td').each(($celldata,index, $colums)=>{

                cy.log($celldata.text())
            })
        })

    })

    it('get specific cell value based on another cell',()=>{

        cy.get("#table1>tbody>tr").contains('conway').parent().within(()=>{

            cy.get('td').eq(3).should('have.text','$50.00')
        })


    })


})