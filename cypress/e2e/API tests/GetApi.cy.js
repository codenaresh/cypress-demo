describe("get api", ()=>{

    it.skip('get api test', ()=>{

        cy.request({

            url:'https://reqres.in/api/users?page=2',

            method:'GET'
        }).then((res)=>{

            cy.log(JSON.stringify(res))

            expect(res.status).eq(200)

            expect(res.body.page).eq(2)

            expect(res.body.data[1].id).eq(8)

            const ids= res.body.data.map((item, index,arr)=>{

               return item.id
            })

           // cy.log(JSON.stringify(ids))

            //cy.log(typeof ids)


        })

    })

    it("ge call", ()=>{


        cy.request({

            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then((res)=>{

            cy.log(JSON.stringify(res))

            expect(res.status).to.eq(200)
            
        })
    })
})