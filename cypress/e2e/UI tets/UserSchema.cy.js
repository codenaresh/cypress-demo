
import Ajv from 'ajv'

const ajv= new Ajv()
describe('validate APi schema validation',()=>{

    it('verif scehma validaion',()=>{

        cy.request({

            method:'GET',
            url:'https://fakestoreapi.com/products/1'
        }).then((res)=>{

            const schema={
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "object",
                "properties": {
                  "id": {
                    "type": "number"
                  },
                  "title": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  },
                  "description": {
                    "type": "string"
                  },
                  "category": {
                    "type": "string"
                  },
                  "image": {
                    "type": "string"
                  },
                  "rating": {
                    "type": "object",
                    "properties": {
                      "rate": {
                        "type": "number"
                      },
                      "count": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "rate",
                      "count"
                    ]
                  }
                },
                "required": [
                  "id",
                  "title",
                  "price",
                  "description",
                  "category",
                  "image",
                  "rating"
                ]
              }

              const validate=ajv.compile(schema)

              const isvalid=validate(res.body)

              expect(isvalid).to.be.true

            //expect(res.status).to.eq(200)

            
        })
    })
})