describe('post call', () => {


    const accesstoken='87a2ea2735d26cd48b18ed735c147545a1dc4cdaed7da1824d87908e41f1a514'

    it('post call', () => {

        cy.request({

            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res)=>{

            expect(res.status).eq(201)

            cy.log(JSON.stringify(res))

            expect(res.body.name).eq('morpheus')

            expect(res.body).has.property('name','morpheus')

        })
    })

    it.only('post call using token value create user test', ()=>{

        cy.request({
           

            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer '+accesstoken
            },

            body:{

                "name":"test automation",
                "gender":"male",
                "email":"demo17@yahoo.com",
                "status":"active"
            }
       
        }).then((res)=>{
        

            cy.log(JSON.stringify(res))

            expect(res.status).eq(201)

            expect(res.body).has.property('name','test automation')
            expect(res.body).has.property('gender','male')
            expect(res.body).has.property('status','active')

            const userid= res.body.id

            cy.log('user id',userid)
            return cy.wrap(userid)

            
        }).then((userid)=>{

            cy.log('fetched user id ',userid)

          
        })


    })
})