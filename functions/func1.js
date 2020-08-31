
const faunadb = require('faunadb')

const q = faunadb.query

exports.handler = (event, context) => {
  
  const subject = event.queryStringParameters.name || "world"
  
 
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  }) 

  
  return {
    statusCode: 200,  
    body: 
     JSON.stringify({
        message:"Hello there",
        status:"Can you hear me?"
    }),
  }
}
