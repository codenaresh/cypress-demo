describe('login with api and  continue with UI Automation', ()=>{

    it('login test', ()=>{

        cy.request({
            mehtod:'POST',
            url:'',
            body:{


            }

        
        }).then((res)=>{

            window.localStorage.setItem('authtoken',res.body.token)
        })

        
    })
})